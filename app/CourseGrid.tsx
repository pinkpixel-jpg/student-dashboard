import CourseCard from "../components/CourseCard";
import { getCourses } from "../lib/getCourse";

export default async function CoursesGrid() {
  const courses = await getCourses();

  return (
    <>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </>
  );
}