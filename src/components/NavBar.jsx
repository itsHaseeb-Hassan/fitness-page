import React,{useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className="bg-white fixed top-0 w-full z-50 shadow-md" role="navigation">
    <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
            <Link to="#home" className="text-[20px] font-bold uppercase">Fitness</Link>
            <button
                className="flex flex-col justify-center items-center w-8 h-8 border border-gray-400 rounded md:hidden"
                onClick={toggleNavbar}
            >
                <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-auto`} id="navbar-collapse">
                <ul className="flex flex-col md:flex-row md:space-x-4 md:mt-0">
                    <li><Link to="#home" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">Home</Link></li>
                    <li><Link to="#overview" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">About</Link></li>
                    <li><Link to="#trainer" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">Trainers</Link></li>
                    <li><Link to="#blog" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">Blog</Link></li>
                    <li><Link to="#price" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">Prices</Link></li>
                    <li><Link to="#testimonial" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">Testimonials</Link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default NavBar