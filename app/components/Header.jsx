import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const session = await auth();
  console.log(".............", session);
  return <div>
    Headers

    {session?.user?(
        <div>
          <p>{session?.user?.name}</p>
          <Image src={session?.user?.image}
          alt={session?.user?.image}
          width={32}
          height={32}
          className="rounded-full"
          />
        </div>
    ):(
    <p>Ask to login</p>
    )}
    
    </div>;
}
