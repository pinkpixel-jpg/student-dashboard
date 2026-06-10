import { getCourses } from "../lib/getCourse";

export default async function Home() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <pre>
        {JSON.stringify(courses, null, 2)}
      </pre>
    </main>
  );
}