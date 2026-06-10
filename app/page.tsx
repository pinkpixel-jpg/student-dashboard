import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-10">
      <CourseCard
        course={{
          id: "1",
          title: "Frontend Development",
          progress: 75,
          icon_name: "Code2",
          created_at: "",
        }}
      />
    </main>
  );
}