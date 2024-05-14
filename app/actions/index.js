'use server'

const { signOut,signIn } = require("@/auth")

export async function doSignOut(){
    await signOut();
}

export async function doSignIn(){
    await signIn("google", {callbackUrl:'http://localhost:3000'});
}