"use client";
import { useSession } from "next-auth/react";
import BoardsView from "./BoardsView";
interface User {
  name: string;
  email: string;
  image: string;
  dbID: string;
}
interface Session {
  user: User;
  expires: string;
}
const Sidebar = () => {
  const sessionData = useSession();
  const session: Session | null = sessionData.data as Session | null;
  console.log(session?.user, "user");

  return (
    <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-md">
      <h3 className="mb-4 font-bold text-xl">All boards (3)</h3>

      <BoardsView userId={session?.user.dbID!} />
    </div>
  );
};

export default Sidebar;
