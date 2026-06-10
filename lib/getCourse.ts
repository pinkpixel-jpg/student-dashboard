import { Course } from "./types";
import { createSupabaseClient } from "./supabase";

export async function getCourses(): Promise<Course[]> {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data as Course[];
}