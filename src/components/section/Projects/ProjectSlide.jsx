import { ProjectLinks } from './ProjectLinks'
import { TechList } from './TechList'

export const ProjectSlide = ({ project, showVideo, onToggleVideo }) => (
  <div
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[500px] sm:h-[600px] shadow-2xl rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center cursor-pointer bg-dark"
    onClick={onToggleVideo}
  >
    {showVideo && project.video ? (
      project.video.includes('youtube') ? (
        <iframe
          width="100%"
          height="100%"
          src={project.video}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        />
      ) : (
        <video src={project.video} controls autoPlay loop muted playsInline className="w-full h-full object-cover" />
      )
    ) : (
      <div className="w-full h-full relative bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-dark/90 to-transparent pointer-events-none" />
        <TechList tech={project.tech} />
      </div>
    )}
    {!showVideo && (project.site || project.repo) && <ProjectLinks site={project.site} repo={project.repo} />}
  </div>
)
