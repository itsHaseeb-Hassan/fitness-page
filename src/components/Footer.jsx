import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">

          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">About Fitness</h2>
            <p>Nunc id turpis tincidunt dui volutpat hendrerit et efficitur dolor. Morbi quis tempor felis, ut dictum ipsum. Praesent venenatis rutrum interdum.</p>
          </div>

          <div className="w-full md:w-5/12 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Sessions</h2>
            <div className="mb-4">
              <h5 className="text-lg font-semibold">Morning</h5>
              <h4 className="text-xl">6:00 AM - 11:00 PM</h4>
            </div>
            <div>
              <h5 className="text-lg font-semibold">Evening</h5>
              <h4 className="text-xl">4:00 PM - 9:00 PM</h4>
            </div>
          </div>

          <div className="w-full md:w-1/4 px-4">
            <h2 className="text-2xl font-semibold mb-4">Follow us</h2>
            <ul className="flex space-x-4">
              <li><span className="text-xl fa fa-facebook hover:text-gray-400"></span></li>
              <li><span className="text-xl fa fa-twitter hover:text-gray-400"></span></li>
              <li><span className="text-xl fa fa-dribbble hover:text-gray-400"></span></li>
              <li><span className="text-xl fa fa-behance hover:text-gray-400"></span></li>
              <li><span className="text-xl fa fa-google-plus hover:text-gray-400"></span></li>
            </ul>
          </div>

        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500">Copyright &copy; 2024 All Rights Reserved | Design: 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
