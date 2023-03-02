import { Element } from 'react-scroll'
import DataHolder from './subComponents/dataHolder.jsx'
import DownButton from '../common/downButton.jsx'

function Introduction({ lang }) {
  return (
    <div className="h-screen w-full bg-gray-300">
      <Element name="intro" />
      <div className="container part-set">
        <DataHolder lang={lang} />
        <DownButton to="about" color="#2d3748" />
      </div>
    </div>
  )
}

export default Introduction
