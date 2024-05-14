import { auth } from "@/auth";
import Image from "next/image";
import Signin from "./Signin";
import Signout from "./Signout";

export default async function Header() {
  const session = await auth();

  return (
    <div>
      {session?.user ? (
        <div className="flex">
          <p>{session?.user?.name}</p>
          <Image
            src={session?.user?.image}
            alt={session?.user?.image}
            width={32}
            height={32}
            className="rounded-full"
          />
          <Signout/>
        </div>
      ) : (
        <>
          <p>Ask to login</p>
          <Signin />
        </>
      )}
    </div>
  );
}
