import Image from "next/image";
import Hero from "./components/Hero";
import WorkoutLibrary from "./components/WorkoutLibrary";

export default function Home() {
  return (
    <main>
      {/* <h1>FitLog</h1> */}
      <Hero></Hero>
      <WorkoutLibrary></WorkoutLibrary>
    </main>
  );
}
