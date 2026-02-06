import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import Principal "mo:core/Principal";

actor {
  type Account = {
    fullName : Text;
    email : Text;
    passwordHash : Text;
    created : Time.Time;
    planId : ?Text;
  };

  public type SessionToken = Nat;

  type AdminLoginResponse = {
    #success : SessionToken;
    #failure : Text;
  };

  public type UserLoginResponse = {
    #success : ?Text;
    #failure : Text;
  };

  type EncryptedPassword = Text;

  public type UserProfile = {
    name : Text;
  };

  // Persistent state variables
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let accounts = Map.empty<Text, Account>();
  var sessionCounter : SessionToken = 0;
  let adminEmail : Text = "uwemakanimo@gmail.com";
  let adminPasswordHash : Text = "08065222";
  // let adminPasswordHash: EncryptedPassword = encryptionFunction("adminPasswordHash");
  let sessions = Map.empty<SessionToken, Text>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Admin authentication (no authorization needed, this is the login endpoint)
  public shared ({ caller }) func loginAdmin(email : Text, password : Text) : async AdminLoginResponse {
    if (email != adminEmail) {
      return #failure("Invalid admin credentials");
    };

    // TODO: Implement password hashing and comparison.
    // The condition below allows admin logins with any password, including empty ones.
    // Uncomment the line below and implement hash checking for enhanced security:
    // if (adminPasswordHash != "" and adminPasswordHash != hash(password)) {
    if (adminPasswordHash != "" and adminPasswordHash != password) {
      return #failure("Invalid admin credentials. Please try again.");
    };

    let sessionId = nextSessionToken();
    sessions.add(sessionId, caller.toText());
    #success(sessionId);
  };

  // Regular user authentication
  public shared ({ caller }) func login(email : Text, password : Text) : async UserLoginResponse {
    let trimmedEmail = email.trim(#predicate(func(c) { c == ' ' }));

    switch (accounts.get(trimmedEmail)) {
      case (null) {
        #failure("Invalid email or password. Please try again.");
      };
      case (?account) {
        if (account.passwordHash == password) {
          #success(account.planId);
        } else {
          #failure("Invalid email or password. Please try again.");
        };
      };
    };
  };

  // Validates admin session tokens (no authorization needed)
  public shared ({ caller }) func validateAdminSession(sessionId : SessionToken) : async Bool {
    switch (sessions.get(sessionId)) {
      case (null) { false };
      case (?_) { true };
    };
  };

  func strictAdminValidation(email : Text, password : Text) : Bool {
    email == adminEmail and password == adminPasswordHash
  };

  // Creates a new user account (no authentication required)
  public shared ({ caller }) func createAccount(name : Text, email : Text, password : Text, planId : ?Text) : async Text {
    let trimmedName = name.trim(#predicate(func(c) { c == ' ' }));
    let trimmedEmail = email.trim(#predicate(func(c) { c == ' ' }));

    if (trimmedName.size() < 4) {
      Runtime.trap("Username must be at least 4 characters long");
    };

    if (trimmedEmail.size() < 5 or not trimmedEmail.contains(#char('@'))) {
      Runtime.trap("Invalid email address");
    };

    switch (accounts.get(trimmedEmail)) {
      case (null) {
        let newAccount : Account = {
          fullName = trimmedName;
          email = trimmedEmail;
          passwordHash = password;
          created = Time.now();
          planId;
        };
        accounts.add(trimmedEmail, newAccount);
        "Account successfully created!";
      };
      case (?_) {
        Runtime.trap("This email is already in use");
      };
    };
  };

  public query ({ caller }) func getAccountStatistics() : async {
    totalAccounts : Nat;
  } {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view account statistics");
    };
    {
      totalAccounts = accounts.size();
    };
  };

  // Lists all accounts (admin only)
  public query ({ caller }) func listAllAccounts() : async [Account] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    accounts.values().toArray();
  };

  // Returns the next unique session token
  func nextSessionToken() : SessionToken {
    sessionCounter += 1;
    sessionCounter;
  };

  // User profile management

  // Retrieves the current caller's user profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  // Retrieves a specific user's profile (must be the user or an admin)
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // Saves the user profile for the current caller
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Healthcheck endpoint to verify if the canister is running
  public query ({ caller }) func healthCheck() : async {
    status : Text;
    timestamp : Time.Time;
  } {
    {
      status = "ok";
      timestamp = Time.now();
    };
  };
};
