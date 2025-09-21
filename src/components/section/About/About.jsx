import React from 'react'
import InfoCard from './InfoCard'
import EducationCard from './EducationCard'
import AnimatedHeadline from '../../../animation/AnimatedHeadline'
import { infoData, educationData } from '../../../data/personData'

const About = () => {
  return (
    <div
      className="z-10 bg-fixed relative  pt-10 sm:pb-50 sm:pt-20 bg-accent text-light select-none shadow-2xl min-h-screen p-4 overflow-hidden"
      aria-label="About Me Section"
    >
      <AnimatedHeadline text="About Me" className="mb-10" />

      <div className="max-w-[1000px] mx-auto flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {infoData.map(info => (
            <InfoCard key={info.id} info={info} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 max-w-[1100px]">
          {educationData.map(edu => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
