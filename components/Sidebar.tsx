const Sidebar = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-md">
      <h3 className="mb-4 font-bold text-xl">All boards (3)</h3>
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
    </div>
  );
};

export default Sidebar;
