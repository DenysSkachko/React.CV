import React from 'react'

export const CV = () => {
  return (
    <div className="flex gap-6 text-center">
      <a
        href="https://drive.google.com/file/d/100a1o2ZswKbyJcQ1vBCrjQH29wwGcYYM/view?usp=drive_link"
        className=" bg-accent hover:bg-accent-hover hover:scale-110 transition-all duration-300 px-4 py-2 rounded-md font-semibold"
      >
        Download CV (UA)
      </a>

      <a
        href="https://drive.google.com/file/d/1nKAXUM-rts9M4d3pUPLFiFYVvVqM6DF3/view?usp=sharing"
        className="bg-light hover:bg-light-hover hover:scale-110 transition-all duration-300 px-4 py-2 rounded-md text-dark font-semibold"
      >
        Download CV (EN)
      </a>
    </div>
  )
}
