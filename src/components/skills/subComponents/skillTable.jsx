import SkillCard from './skillCard'
import data from '@/words/data.json'

function SkillTable({ lang }) {
  const { info } = data.skills
  const { otherSkills } = data

  return (
    <table className="container table-fixed border-4 mx-4 border-black sm:max-w-lg lg:max-w-2xl">
      <thead>
        <tr className="border">
          <th className="w-4/12 px-4 py-2 font-bold border border-gray-600 lg:text-lg">
            {lang === 'fa' ? 'زبان' : 'Language'}
          </th>
          <th className="w-7/12 px-4 py-2 font-bold border border-gray-600 lg:text-lg">
            {lang === 'fa' ? 'کتابخانه' : 'Library'}
          </th>
        </tr>
      </thead>
      <tbody>
        {info.map((skill) => (
          <tr key={skill.name} className="border">
            <td className="border border-gray-600">
              <SkillCard
                cardName={skill.name}
                nStars={skill.stars}
                cardType="big"
              />
            </td>
            <td className="border border-gray-600">
              <div className="flex flex-wrap justify-center mx-auto">
                {skill.subSkill.map((s) => (
                  <SkillCard
                    key={s.name}
                    cardName={s.name}
                    nStars={s.stars}
                    cardType="small"
                  />
                ))}
              </div>
            </td>
          </tr>
        ))}
        <tr className="border border-gray-600">
          <th colSpan="2" className="table-head">
            {otherSkills.title[lang]}
          </th>
        </tr>
        <tr>
          <td colSpan="2">
            <div className="flex flex-wrap justify-center mx-auto w-10/12">
              {otherSkills.subSkill.map((s) => (
                <SkillCard
                  key={s.name}
                  cardName={s.name}
                  nStars={s.stars}
                  cardType="small"
                />
              ))}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default SkillTable
