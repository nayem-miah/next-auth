const { doSignInWithGoogle,doSignInWithGithub } = require("../actions");

export default function Signin() {
  return (
    //    <Link href='/api/auth/signin' > Sign In</Link>
    <>
      <form action={doSignInWithGoogle}>
        <button type="submit">Sign In With Google</button>
      </form>

      <form action={doSignInWithGithub}>
        <button type="submit">Sign In With Github</button>
      </form>
    </>
  );
}
