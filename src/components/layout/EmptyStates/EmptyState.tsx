import nofav from "../../../assets/nofav.jpg"
function EmptyState({ message }: { message: string }) {
  return (
    <>
      <div className="h-screen  flex-col w-full flex justify-center items-center">
        <p className="font-bold font-brico text-2xl mb-4">{message}!</p>
        <img
          loading="lazy"
          src={nofav}
          className="h-[300px]"
          alt="no images Found"
        />
      </div>
    </>
  )
}

export default EmptyState
