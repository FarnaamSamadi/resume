import SocialIcon from './socialIcon'
import data from '@/words/data.json'
import Features from './features'

const DataHolder = ({ lang }) => {
  const { mainInfo, links } = data

  function fixFarsi(classes) {
    return lang === 'fa' ? (classes += ' dir-rtl') : classes
  }

  return (
    <div className="part-container">
      <h1
        className={`text-2xl rounded-lg p-2 font-bold lg:mb-5 lg:text-3xl ${
          lang === 'fa' && 'dir-rtl'
        }`}
      >
        {mainInfo[lang].partOne} <br />
        {mainInfo[lang].partTwo}
      </h1>
      <Features lang={lang} info={mainInfo} />
      <h3 className={`m-2 lg:text-lg ${lang === 'fa' && 'dir-rtl'}`}>
        {mainInfo[lang].partFour}
      </h3>
      <div className="flex flex-row justify-center items-center mt-2">
        {Object.keys(links).map((item) => (
          <SocialIcon key={item} url={links[item]} iconName={item} />
        ))}
      </div>
    </div>
  )
}

export default DataHolder
