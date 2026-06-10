import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import ActivityTile from "../components/ActivityTile";
import CourseCard from "../components/CourseCard";
import { getCourses } from "../lib/getCourse";

export default async function Home() {
  const courses = await getCourses();

  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <HeroTile />
          </div>

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

          <div className="lg:col-span-3">
            <ActivityTile />
          </div>
        </div>
      </section>
    </main>
  );
}