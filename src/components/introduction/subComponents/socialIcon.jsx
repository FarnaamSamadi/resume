import iconFinder from '../../icons/icons'

function SocialIcon({ url, iconName }) {
  return (
    <a href={url}>
      <div className="rounded-full mr-1 bg-gray-900 sm:mx-1">
        <div className="p-1 rounded-full overflow-hidden">
          {iconFinder(iconName, 40, '#f7fafc')}
        </div>
      </div>
    </a>
  )
}

export default SocialIcon
