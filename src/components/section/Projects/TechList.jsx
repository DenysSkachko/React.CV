import { getTechData } from '../../../hooks/getTechData'

export const TechList = ({ tech }) => (
  <div className="absolute bottom-0 left-0 w-full flex justify-center p-2 gap-2 flex-row flex-wrap-reverse content-end">
    {getTechData(tech).map((item, i) => (
      <span
        key={i}
        className="flex w-fit items-center gap-1 px-5 py-3 text-sm rounded-xl bg-light hover:scale-110 transition-all duration-300"
      >
        {item.logo && <img src={item.logo} alt={item.title} className="w-8 h-8 object-contain" />}
      </span>
    ))}
  </div>
)
