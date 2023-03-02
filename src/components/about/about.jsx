import { Element } from 'react-scroll'
import DownButton from '../common/downButton'
import Line from './subComponents/line'
import data from '@/words/data.json'

const About = ({ lang }) => {
  const { about } = data

  return (
    <div className="h-screen w-full bg-gray-900">
      <Element name="about" className="element" />
      <div className="part-set">
        <div className="part-container items-center">
          <h2 className="part-title text-gray-200 bg-gray-900 border-gray-200">
            {about[lang].title}
          </h2>
          <div
            className={`px-6 ${
              lang === 'fa' ? ' dir-rtl text-right' : 'text-left'
            }`}
          >
            {Object.keys(about[lang].info).map((line) => (
              <Line key={line} text={about[lang].info[line]}></Line>
            ))}
          </div>
        </div>
        <DownButton to="skills" color="#edf2f7" />
      </div>
    </div>
  )
}

export default About
