import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type UserLoginResponse = {
    __kind__: "failure";
    failure: string;
} | {
    __kind__: "success";
    success: string | null;
};
export interface Account {
    created: Time;
    planId?: string;
    fullName: string;
    email: string;
    passwordHash: string;
}
export type Time = bigint;
export type SessionToken = bigint;
export type AdminLoginResponse = {
    __kind__: "failure";
    failure: string;
} | {
    __kind__: "success";
    success: SessionToken;
};
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createAccount(name: string, email: string, password: string, planId: string | null): Promise<string>;
    getAccountStatistics(): Promise<{
        totalAccounts: bigint;
    }>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    healthCheck(): Promise<{
        status: string;
        timestamp: Time;
    }>;
    isCallerAdmin(): Promise<boolean>;
    listAllAccounts(): Promise<Array<Account>>;
    login(email: string, password: string): Promise<UserLoginResponse>;
    loginAdmin(email: string, password: string): Promise<AdminLoginResponse>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    validateAdminSession(sessionId: SessionToken): Promise<boolean>;
}
