import Button from "../layout/common/Button"
import Lottie from "lottie-react"
import AnimateGallery from "../../assets/galleryAnim.json"
import LoginDialog from "../Dialogs/LoginDialog"
import { useState } from "react"
import SignInDialog from "../Dialogs/SignInDialog"
function Home() {
  const [isOpen, setIsLoginOpen] = useState(false)
  const [isRegistrationOpened, setIsSigninOpen] = useState(false)

  return (
    <section
      className={` font-brico relative  flex flex-col items-center justify-center text-right h-screen bg-orange-300 `}
    >
      {(isOpen || isRegistrationOpened) && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      <div className="welcome mb-20 flex flex-col items-center ">
        <Lottie
          animationData={AnimateGallery}
          className="h-48 w-48"
          loop={true}
        />
        <h1 className="text-6xl font-bold text-center">
          WelCome To Your Favorite Gallery
        </h1>
      </div>
      <div className="coolection flex gap-4">
        <Button
          disabled={isOpen}
          onClick={() => setIsSigninOpen(true)}
          className="disabled:bg-opacity-30 bg-black transition-colors text-orange-300 rounded p-3 hover:bg-orange-300 hover:text-black hover:ring-white hover:ring-2"
        >
          Sign In
        </Button>
        <Button
          disabled={isOpen}
          onClick={() => setIsLoginOpen(true)}
          className="disabled:bg-opacity-30 bg-black  text-orange-300 rounded p-3 hover:bg-orange-300 hover:text-black hover:ring-white hover:ring-2"
        >
          Login
        </Button>
      </div>
      <LoginDialog
        message="Login To Enter The gallery"
        setIsOpen={() => setIsLoginOpen(false)}
        isOpen={isOpen}
      />
      <SignInDialog
        message="Signin To Enter The gallery"
        setIsOpen={() => setIsSigninOpen(false)}
        isOpen={isRegistrationOpened}
      />
    </section>
  )
}

export default Home
