function Features({ lang, info }) {
  return (
    <>
      <h2
        className={`text-xl p-2 font-semibold mb-5 lg:hidden ${
          lang === 'fa' && 'dir-rtl'
        }`}
      >
        {info[lang].partThree.map((i) => (
          <div
            key={i}
            className={`sm:py-1 ${lang === 'fa' ? 'text-right ' : 'text-left'}`}
          >
            <svg viewBox="0 0 36 36" className="mx-3 fill-white h-20px">
              <path
                d="M36,18c0,9.9-8.1,18-18,18S0,27.9,0,18S8.1,0,18,0S36,8.1,36,18z M28.8,13.5c0.9-0.9,0.8-2.3-0.2-3.1
	c-0.9-0.7-2.1-0.6-2.9,0.2l-9,9c-0.6,0.6-1.6,0.6-2.2,0l-4.1-4.1c-0.9-0.9-2.3-0.8-3.1,0.2c-0.7,0.9-0.6,2.1,0.2,2.9l7,7
	c0.6,0.6,1.6,0.6,2.2,0L28.8,13.5z"
              />
            </svg>

            {i}
            <br />
          </div>
        ))}
      </h2>
      <h2
        className={`hidden text-xl p-2 font-bold mb-5 lg:block ${
          lang === 'fa' && 'dir-rtl'
        }`}
      >
        {info[lang].partThree.join(' | ')}
      </h2>
    </>
  )
}

export default Features
