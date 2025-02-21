import React from "react";
import { AuthState } from "./AuthState";
import { Authenticated } from "./authenticated";
import { Unauthenticated } from "./unauthenticated"

export function Login({userName, authState, onAuthChange}) {


    return authState === AuthState.Authenticated ? 
    <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}/> : 
    <Unauthenticated userName={userName} onLogin={(userName) => onAuthChange(userName, AuthState.Authenticated)}/>
}