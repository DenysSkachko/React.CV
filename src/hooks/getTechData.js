import { skillsData } from '../data/skillsCards'

export function getTechData(techList) {
  const allSkills = [
    ...skillsData.main,
    ...skillsData.tools,
    ...skillsData.backend,
    ...skillsData.other,
    ...skillsData.libs,
  ]

  return techList.map((tech) => {
    const found = allSkills.find((s) => s.title.toLowerCase() === tech.toLowerCase())
    if (found) {
      return { title: found.title, logo: found.logo }
    }
    return { title: tech, logo: null } 
  })
}