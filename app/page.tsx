import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-6">
        <HeroTile />
      </section>
    </main>
  );
}