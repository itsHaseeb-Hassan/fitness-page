import React from 'react'
import img1 from '../assets/images/trainer-img1.jpg'
import img2 from '../assets/images/trainer-img2.jpg'
import img3 from '../assets/images/trainer-img3.jpg'
const Trainer = () => {
  return (
    <div>
         (
    <section id="trainer" className="relative bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/parallax-image.jpg)' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fadeInUp" style={{ animationDelay: '1.3s' }}>Our Trainers</h2>
          <p className="text-lg animate-fadeInUp" style={{ animationDelay: '1.3s' }}>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 animate-fadeInUp" style={{ animationDelay: '1.9s' }}>
            <div className="relative">
              <img src={img1} className="w-full h-auto" alt="Trainer" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h2 className="text-xl font-bold">Jenny</h2>
                  <h3 className="text-lg">Body Trainer</h3>
                  <ul className="flex justify-center space-x-4 mt-4">
                    <li><a href="#" className="fa fa-facebook animate-fadeInUp" style={{ animationDelay: '1s' }}></a></li>
                    <li><a href="#" className="fa fa-twitter animate-fadeInUp" style={{ animationDelay: '1.3s' }}></a></li>
                    <li><a href="#" className="fa fa-behance animate-fadeInUp" style={{ animationDelay: '1.9s' }}></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 animate-fadeInUp" style={{ animationDelay: '2s' }}>
            <div className="relative">
              <img src={img1} className="w-full h-auto" alt="Trainer" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h2 className="text-xl font-bold">Marry</h2>
                  <h3 className="text-lg">Fitness Trainer</h3>
                  <ul className="flex justify-center space-x-4 mt-4">
                    <li><a href="#" className="fa fa-facebook animate-fadeInUp" style={{ animationDelay: '1s' }}></a></li>
                    <li><a href="#" className="fa fa-twitter animate-fadeInUp" style={{ animationDelay: '1.3s' }}></a></li>
                    <li><a href="#" className="fa fa-behance animate-fadeInUp" style={{ animationDelay: '1.9s' }}></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 animate-fadeInUp" style={{ animationDelay: '2.3s' }}>
            <div className="relative">
              <img src={img3} className="w-full h-auto" alt="Trainer" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h2 className="text-xl font-bold">Olivia</h2>
                  <h3 className="text-lg">Yoga Teacher</h3>
                  <ul className="flex justify-center space-x-4 mt-4">
                    <li><a href="#" className="fa fa-facebook animate-fadeInUp" style={{ animationDelay: '1s' }}></a></li>
                    <li><a href="#" className="fa fa-twitter animate-fadeInUp" style={{ animationDelay: '1.3s' }}></a></li>
                    <li><a href="#" className="fa fa-behance animate-fadeInUp" style={{ animationDelay: '1.9s' }}></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Trainer