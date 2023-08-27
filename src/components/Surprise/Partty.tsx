import { useWindowSize } from "@uidotdev/usehooks"
import Confetti from "react-confetti"

export default function Party() {
  const { width, height } = useWindowSize()
  return <Confetti numberOfPieces={50} width={width || 0 } height={height || 0} />
}
