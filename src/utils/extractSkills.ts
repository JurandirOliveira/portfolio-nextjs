// utils/techUtils.ts
import { skillCategories } from "@/data/skills";

// Função para obter todas as skills únicas
export function getAllUniqueSkills(): string[] {
  const allSkills: string[] = [];
  
  skillCategories.forEach(category => {
    category.skills.forEach(skill => {
      if (!allSkills.includes(skill.name)) {
        allSkills.push(skill.name);
      }
    });
  });
  
  // Ordenar alfabeticamente
  return allSkills.sort();
}

// Sua função existente para encontrar skill pelo nome
export function findSkillByName(techName: string) {
  const normalizedTechName = techName.toLowerCase().trim();
  
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