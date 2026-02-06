import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Principal "mo:core/Principal";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the admin-only role-based access control state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Account record type
  type Account = {
    fullName : Text;
    email : Text;
    passwordHash : Text;
    created : Time.Time;
    planId : ?Text;
  };

  // User profile type as required by frontend
  public type UserProfile = {
    name : Text;
  };

  // Persistent account store
  let accounts = Map.empty<Text, Account>();

  // User profiles store
  let userProfiles = Map.empty<Principal, UserProfile>();

  public shared ({ caller }) func createAccount(name : Text, email : Text, password : Text, planId : ?Text) : async Text {
    // Require at least user permission to create accounts
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can create accounts");
    };

    let accountName = name.trim(#predicate(func(c) { c == ' ' }));
    let accountEmail = email.trim(#predicate(func(c) { c == ' ' }));

    if (accountName.size() < 4) {
      return "Username must be at least 4 characters long";
    };

    if (accountEmail.size() < 5 or not accountEmail.contains(#char('@'))) {
      return "Invalid email";
    };

    let existing = accounts.get(accountEmail);
    if (existing != null) {
      return "Email already in use";
    };

    let newAccount : Account = {
      fullName = accountName;
      email = accountEmail;
      passwordHash = password;
      created = Time.now();
      planId;
    };

    accounts.add(accountEmail, newAccount);
    "Account successfully created!";
  };

  public query ({ caller }) func getAccountStatistics() : async {
    totalAccounts : Nat;
  } {
    // Require admin permission to view account statistics
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view account statistics");
    };
    {
      totalAccounts = accounts.size();
    };
  };

  public query ({ caller }) func listAllAccounts() : async [Account] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    accounts.values().toArray();
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
