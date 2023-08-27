import { useMutation} from "@tanstack/react-query"
import { server } from "./serverApi"
import { SiginT } from "../schema/zodAuth"

const sigin = () => {
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: SiginT) => server.post("/api/auth", { ...data }),
  })
}

export default sigin
