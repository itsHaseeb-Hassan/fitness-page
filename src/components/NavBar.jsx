import React,{useState} from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className="bg-white fixed top-0 w-full z-50 shadow-md" role="navigation">
    <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
            <a href="#" className="text-xl font-bold">Fitness</a>
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
                    <li><a href="#home" className="block py-2 px-4 text-gray-700 hover:text-gray-900 smoothScroll">Home</a></li>
                    <li><a href="#overview" className="block py-2 px-4 text-gray-700 hover:text-gray-900 smoothScroll">About</a></li>
                    <li><a href="#trainer" className="block py-2 px-4 text-gray-700 hover:text-gray-900 smoothScroll">Trainers</a></li>
                    <li><a href="#blog" className="block py-2 px-4 text-gray-700 hover:text-gray-900 smoothScroll">Blog</a></li>
                    <li><a href="#price" className="block py-2 px-4 text-gray-700 hover:text-gray-900 smoothScroll">Prices</a></li>
                    <li><a href="#testimonial" className="block py-2 px-4 text-gray-700 hover:text-gray-900 smoothScroll">Testimonials</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default NavBar