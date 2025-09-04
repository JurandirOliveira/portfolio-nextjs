// utils/techUtils.ts
import { skillCategories } from "@/data/skills";

export function findSkillByName(techName: string) {
  const normalizedTechName = techName.toLowerCase().trim();
  
  // Percorre todas as categorias de skills
  for (const category of skillCategories) {
    const foundSkill = category.skills.find(skill => 
      skill.name.toLowerCase() === normalizedTechName
    );
    
    if (foundSkill) {
      return foundSkill;
    }
  }
  
  return null;
}