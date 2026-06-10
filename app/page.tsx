import { Suspense } from "react";
import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import ActivityTile from "../components/ActivityTile";
import CourseSkeleton from "../components/CourseSkeleton";
import CoursesGrid from "./CourseGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <HeroTile />
          </div>

          <Suspense
            fallback={
              <>
                <CourseSkeleton />
                <CourseSkeleton />
                <CourseSkeleton />
              </>
            }
          >
            <CoursesGrid />
          </Suspense>

          <div className="lg:col-span-3">
            <ActivityTile />
          </div>
        </div>
      </section>
    </main>
  );
}