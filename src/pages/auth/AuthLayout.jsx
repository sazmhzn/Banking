import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {<Outlet />}
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

export default AuthLayout