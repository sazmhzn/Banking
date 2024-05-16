import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer_name'>
        <p className="text-xl font-bold text-gray-700">
          S
        </p>
      </div>

      <div className='footer_email'>
          <h1 className="text-14 truncate text-gray-700 font-semibold">
            Suron
          </h1>
          <p className="text-14 truncate font-normal text-gray-600">
            Suron.maharjan@gmail.com
          </p>
      </div>

      <Link to={'/sign-in'} className="footer_image">
        <img src="icons/logout.svg" alt="jsm" />
      </Link>
    </footer>
  )
}

export default Footer