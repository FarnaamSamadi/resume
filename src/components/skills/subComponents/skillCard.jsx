import Star from './star'
import iconFinder from '../../icons/icons'

const SkillCard = ({ cardName, nStars, cardType }) => {
  if (cardType === 'big') {
    return (
      <div>
        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded overflow-hidden shadow-2xl bg-white shadow-lg mx-auto mt-2">
          <div className="p-2 my-auto">{iconFinder(cardName, 50)}</div>
        </div>
        <Star nStars={nStars} />
      </div>
    )
  } else if (cardType === 'small') {
    return (
      <div>
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded overflow-hidden shadow-lg bg-gray-200 mx-1 mb-1">
          <div className="p-2">{iconFinder(cardName)}</div>
        </div>
        <Star nStars={nStars} />
      </div>
    )
  }
}

export default SkillCard
