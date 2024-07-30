import { sql } from "@vercel/postgres";

const BoardsView = async ({ userId }: { userId: string }) => {
  console.log("user id", userId);

  const boards =
    await sql`select * from boards join users on boards.authorid=users.id where users.id=${userId}`;
  console.log(boards);

  return (
    <div>
      <h1>boards view</h1>

      {/* 
          
           <div>
        <ul className="flex flex-col gap-2">
          <li className="p-2 cursor-pointer bg-purple-600 rounded-full">
            Platform Launch
          </li>
          <li className="p-2 cursor-pointer bg-purple-600 rounded-full">
            Marketing Plan
          </li>
          <li className="p-2 cursor-pointer bg-purple-600 rounded-full">
            Roadmap
          </li>
          <li className="p-2 cursor-pointer bg-purple-600 rounded-full">
            Java
          </li>

          <li className="p-2 cursor-pointer bg-purple-600 rounded-full">
            <button>Create New Board</button>
          </li>
        </ul>
      </div>
          */}
    </div>
  );
};

export default BoardsView;
