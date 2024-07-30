import Task from "./Task";

const Column = ({ title }: { title: string }) => {
  return (
    <div className="max-h-fit min-w-72 max-w-72 flex flex-col gap-4 bg-[rgba(255,255,255,0.02)] p-3 rounded-md">
      <h3 className="text-xl">{title}</h3>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};
export default Column;
