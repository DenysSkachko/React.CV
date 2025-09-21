export default function Logo() {
  return (
    <h1
      style={{ letterSpacing: '0.13em' }}
      className="absolute -top-1.5 left-0 flex flex-col cursor-pointer font-mickey text-5xl font-extrabold uppercase hover:scale-110  transition-all duration-300"
    >
      <span className="text-accent hover:text-accent-hover ">Denys</span>
      <span className="-mt-5 text-3xl hover:text-light-hover">Skachko</span>
    </h1>
  )
}
