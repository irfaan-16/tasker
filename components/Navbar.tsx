"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex justify-between p-4">
      <h1>tasker</h1>
      {session?.user ? (
        <div>
          <Image
            src={session?.user.image!}
            height={50}
            width={50}
            alt="user profile"
            className="rounded-full"
          />
          <button onClick={() => signOut()}>logout</button>
        </div>
      ) : (
        <button
          className="p-2 rounded-md bg-green-500 hover:bg-green-800"
          onClick={() => signIn("google")}
        >
          login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
