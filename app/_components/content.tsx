/**
 *
 * @file: content.tsx
 *
 * @copyright: Jonathan Gabioud
 *
 * @version: 1.0
 *
 **/

import Education from "./content/education";
import Experience from "./content/experience";
import Reference from "./content/reference";

export default function Content() {
  return (
    <div className="p-5 bg-white">
      <h1 className="text-3xl mt-8">Jonathan Gabioud</h1>
      <h2>DÉVELOPPEUR D'APPLICATION</h2>
      <Education />
      <Experience />
      <Reference />
    </div>
  );
}
