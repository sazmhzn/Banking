import { AuthForm } from "../../components/AuthForm"

const signUp = () => {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
    <div className="auth-asset">
      <div>
        <img 
          src="/icons/auth-image.svg"
          alt="Auth image"
          width={500}
          height={500}
          className="rounded-l-xl object-contain"
        />
      </div>
    </div>
  </main>
    
  )
}

export default signUp