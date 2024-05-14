const { doSignIn } = require("../actions");

export default function Signin() {
  return (
    //    <Link href='/api/auth/signin' > Sign In</Link>
    <form action={doSignIn}>
      <button type="submit">Sign In With Google</button>
    </form>
  );
}
