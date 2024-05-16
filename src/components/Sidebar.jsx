import { Link, useParams } from "react-router-dom";
import { sidebarLinks } from "../constants";
import Footer from "./Footer";
import { useState } from "react";

const Sidebar = () => {
  const [pathname, setPathname] = useState('/')
  const parameter = useParams();
  console.log("param: ", parameter);
  // const isActive = this.context.router.route.location.pathname === this.props.to;
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link className="mb-12 cursor-pointer flex items-center gap-2">
          <img src="/icons/logo.svg" alt="Horizon logo" className="size-[24px] max-xl:size-14" />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {/* <Link>HEllo</Link> */}

        {sidebarLinks.length > 0
          ? sidebarLinks.map((item) => {
              const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

              return (
                <Link to={item.route} key={item} className={isActive ? "bg-bankGradient sidebar-link" : "sidebar-link"} onClick={()=> {setPathname(item.route)}} >
                  <div className="relative size-6">
                    <img src={item.imgURL} alt={item.label} className={isActive ? 'brightness-[3] invert-0' : '' } />
                  </div>
                  <p className={isActive ? "text-white" : "sidebar-label" } >{item.label}</p>
                </Link>
              );
            })
          : "No Links found!!"}
      </nav>
      <Footer />
    
    </section>
  );
};

export default Sidebar;
