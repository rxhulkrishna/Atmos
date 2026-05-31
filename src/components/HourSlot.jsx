function HourSlot({time, icon, temp, rain, isActive}) {
  return (
    <div className={`flex flex-col flex-1 shrink-0 items-center text-sm min-w-20 gap-1 py-4 px-2 ${isActive ? 'bg-neutral-700 border border-neutral-400 rounded-xl' : ''}`}>
      <span className="">{time}</span>
      <span className="">{icon}</span>
      <span className="text-base text-neutral-100 ">{temp}</span>
      <span className="text-[#55c9ff] text-xs">{rain}</span>
    </div>
  )
}

export default HourSlot