import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import ActivityTile from "../components/ActivityTile";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-6 space-y-6">
        <HeroTile />
        <ActivityTile />
      </section>
    </main>
  );
}