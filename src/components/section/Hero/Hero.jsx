import SocialLinks from '../../shared/SocialLinks'
import { CV } from '../../shared/CV'
import GradientHero from './GradientHero'

const Hero = () => {
  return (
    <section
      id="home"
      className="z-11 relative bg-fixed bg-cover bg-center min-h-screen px-6  flex flex-col items-center justify-center overflow-hidden select-none"
      style={{
        backgroundImage: "url('/hero-back.png')",
      }}
    >
      <GradientHero />

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center ">
        <div className="flex flex-col flex-wrap justify-center items-center gap-6">
          <div className="flex flex-col items-center">
            <h1 className="animate-float-slow z-10 text-5xl md:text-[4.3rem] font-bold hover:scale-[1.1] hover:-rotate-[1deg] transition-all duration-300">
              Denys Skachko
            </h1>
            <h2 className="-mt-1 text-accent hover:text-dark hover:bg-accent rounded-lg font-bold transition-all text-3xl md:text-5xl duration-300">
              /front-end developer
            </h2>
            <p className="mt-6 max-w-100 text-xs sm:text-sm font-medium text-center tracking-widest text-light-hover">
              Hello, welcome to my portfolio. I’m a React/Next.js developer with about one year of experience, working
              with modern tools like Tailwind CSS and TypeScript. Here you’ll find my projects and ideas that reflect my
              coding style and approach. Feel free to reach out if you’d like to connect.
            </p>
          </div>

          <CV />
        </div>
      </div>
    </section>
  )
}

export default Hero
