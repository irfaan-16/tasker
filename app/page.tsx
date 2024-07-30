import Column from "@/components/Column";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen p-10 gap-10">
      <Sidebar />
      <main className="flex gap-4 items-start">
        <Column title="Todo" />
        <Column title="Doing" />
        <Column title="Done" />
        <Column title="Casual" />
      </main>
    </main>
  );
}
