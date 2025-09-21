export const ProjectLinks = ({ site, repo }) => (
  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
    {site && (
      <a
        href={site}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 rounded-xl bg-accent text-light font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Visit Project
      </a>
    )}
    {repo && (
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 rounded-xl bg-dark text-light font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        GitHub Repo
      </a>
    )}
  </div>
)
