function Badge({ toDisplay }: { toDisplay: string }) {
  return (
    <div className="absolute translate-x-1 translate-y-2 z-20 text-sm top-[10%] right-[-5px] shadow-lg text-black rotate-45 bg-white p-1 rounded-md filter bg-blend-color- ">
      {toDisplay}
    </div>
  )
}

export default Badge
