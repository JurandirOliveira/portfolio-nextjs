import { skillCategories } from "@/data/skills";
import { Logo } from "./Logo";

export default function Skills() {
  return (
    <aside className="w-full lg:w-1/3 flex flex-col gap-10 px-4 lg:px-0 mt-8 lg:mt-0">
      {skillCategories.map((category) => (
        <div key={category.category}>
          <h3 className="text-base font-bold text-gray-600 dark:text-gray-300 mb-3 whitespace-nowrap">
            {category.category}
          </h3>
          <div className="grid grid-cols-5 gap-5 lg:gap-x-17">
            {category.skills.map((skill) => (
              <Logo key={skill.name} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
