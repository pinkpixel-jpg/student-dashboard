import { supabase } from "./supabase";
import { Course } from "./types";

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data as Course[];
}