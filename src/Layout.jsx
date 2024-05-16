import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"

const Layout = () => {
  return (
    <main className=" flex h-screen w-full font-inter">
      {/* <Sidebar user={loggedIn} /> */}
      <Sidebar />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <img src="/icons/logo.svg" width={30} height={30} alt="logo" />
        </div>
       <Outlet />
      </div>
    </main>
  )
}

export default Layout