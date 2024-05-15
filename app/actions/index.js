"use server";

const { signOut, signIn } = require("@/auth");

export async function doSignOut() {
  await signOut();
}

export async function doSignInWithGoogle() {
  await signIn("google", { callbackUrl: "http://localhost:3000" });
}

export async function doSignInWithGithub() {
  await signIn("github", { callbackUrl: "http://localhost:3000" });
}

export async function login(formData) {
  await signIn("credentials", {
    email: formData.get("email"),
    password: formData.get("password"),
    redirect: false,
  });
}


