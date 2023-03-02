import { Element } from 'react-scroll'
import SkillTable from './subComponents/skillTable'
import data from '@/words/data.json'

function Skill({ lang }) {
  const { title } = data.skills
  return (
    <div>
      <div className="h-auto w-full mx-auto flex flex-col justify-center items-center text-center bg-gray-100 mb-6">
        <Element name="skills" className="element" />
        <h2 className="part-title text-gray-900 bg-gray-200 border-gray-900">
          {title[lang]}
        </h2>
        <SkillTable lang={lang} />
      </div>
    </div>
  )
}

export default Skill
