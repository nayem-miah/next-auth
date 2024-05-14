import { doSignOut } from "../actions"

doSignOut
export default function Signout() {
  return (
    <form action={doSignOut}>
       <button type="submit">Sign Out</button>
    </form>
  )
}
