import Button from "../layout/common/Button"
import Lottie from "lottie-react"
import AnimateGallery from "../../assets/galleryAnim.json"
import LoginDialog from "../Dialogs/LoginDialog"
import SignInDialog from "../Dialogs/SignInDialog"
import { useAuthStore } from "../../hooks/state-managment/store/authStore"
function Home() {
  const { isLoginOpen, isSignInOpen, setIsLoginOpen, setIsSigninOpen } =
    useAuthStore()
  const isTryingToAuthentifed = isLoginOpen || isSignInOpen

  return (
    <section
      className={` font-brico relative  flex flex-col items-center justify-center text-right h-screen bg-orange-300 `}
    >
      {isTryingToAuthentifed && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {isLoginOpen && (
              <LoginDialog
                message="Login To Enter The gallery"
                setIsOpen={() => setIsLoginOpen(false)}
                EnableSignIn={() => {
                  setIsLoginOpen(false)
                  setIsSigninOpen(true)
                }}
                isOpen={isLoginOpen}
              />
            )}
            {isSignInOpen && (
              <SignInDialog
                message="Signin To Enter The gallery"
                setIsOpen={() => setIsSigninOpen(false)}
                isOpen={isSignInOpen}
                EnableLogIn={() => {
                  setIsSigninOpen(false)
                  setIsLoginOpen(true)
                }}
              />
            )}
          </div>
        </>
      )}
      <div className="welcome mb-20 flex flex-col items-center ">
        <Lottie
          animationData={AnimateGallery}
          className="h-48 w-48"
          loop={true}
        />
        <h1 className="text-6xl font-bold text-center">
          Welcome To Your Favorite Gallery
        </h1>
      </div>
      <div className="coolection flex gap-4">
        <Button
          disabled={isSignInOpen}
          onClick={() => setIsSigninOpen(true)}
          className="disabled:bg-opacity-30 bg-black transition-colors text-orange-300 rounded p-3 hover:bg-orange-300 hover:text-black hover:ring-white hover:ring-2"
        >
          Sign In
        </Button>
        <Button
          disabled={isLoginOpen}
          onClick={() => setIsLoginOpen(true)}
          className="disabled:bg-opacity-30 bg-black  text-orange-300 rounded p-3 hover:bg-orange-300 hover:text-black hover:ring-white hover:ring-2"
        >
          Login
        </Button>
      </div>
    </section>
  )
}

export default Home
