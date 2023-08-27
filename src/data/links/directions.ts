import Fire from "../../components/svgs/Fire"
import Heart from "../../components/svgs/Heart"
import Home from "../../components/svgs/Home"
import World from "../../components/svgs/World"
import Fav from "../../components/svgs/fav"
import Image from "../../components/svgs/Image"

export const directions = [
  {
    id: 0,
    to: "/",
    text: "home",
    ICON: Home,
  },
  {
    id: 1,
    to: "/gallery",
    text: "gallery",
    ICON: World,
  },
  {
    id: 2,
    to: "album",
    text: "Album",
    ICON: Image,
  },
  {
    id: 3,
    to: "fav",
    text: "Favorite",
    ICON: Fav,
  },
  {
    id: 4,
    to: "liked",
    text: "Liked",
    ICON: Heart,
  },
  {
    id: 5,
    to: "hote",
    text: "fire",
    ICON: Fire,
  },
]
