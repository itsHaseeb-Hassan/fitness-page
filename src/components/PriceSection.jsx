import React from 'react';
import pricebg from '../assets/images/price-bg.jpg'
const PriceSection = () => {
  return (
    <section id="price" className="relative bg-fixed bg-cover bg-center py-30 " style={{ backgroundImage: `url(${pricebg})`,height:'100%' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate fadeInUp" data-delay="0.9s">
          <h2 className="text-4xl font-bold mb-4 text-white py-4">Our Prices</h2>
          <p className="text-lg text-white">Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 animate fadeInUp" data-wow-delay="1s">
            <div className="p-8 border rounded-lg shadow-lg text-white hover:bg-white text-center hover:text-black">
              <h3 className="text-[50px] font-extrabold mb-4  italic">Healthy</h3>
              <div className=" mx-auto w-32 h-32 flex items-center justify-center text-4xl font-bold mb-4 bg-gray-700 rounded-full">
  <span className="text-xl">$</span>350
</div>

              <ul className="mb-4 font-bold text-[25px]">
                <li className="mb-2">One General Trainer</li>
                <li className="mb-2">Gym Services</li>
                <li className="mb-2">5 Yoga Courses</li>
                <li className="mb-2">10 Thai Massages</li>
                <li className="mb-2">15 Aerobics</li>
              </ul>
             
              <button className="w-full py-5 text-[20px] font-bold  bg-[#26253A] text-white rounded hover:bg-[#222222]  transition duration-300">Sign Up Now</button>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8 wow fadeInUp" data-wow-delay="1.3s">
            <div className="p-8 border rounded-lg shadow-lg text-white hover:bg-white text-center hover:text-black">
              <h3 className="text-[50px] font-extrabold mb-4 italic">Best Fit</h3>
              <div className=" mx-auto w-32 h-32 flex items-center justify-center text-4xl font-bold mb-4 bg-gray-700 rounded-full">
  <span className="text-xl">$</span>550
</div>

              <ul className="mb-4 font-bold text-[25px]">
                <li className="mb-2">Two General Trainers</li>
                <li className="mb-2">Gym Services</li>
                <li className="mb-2">10 Yoga Courses</li>
                <li className="mb-2">20 Thai Massages</li>
                <li className="mb-2">25 Aerobics</li>
              </ul>
              <button className="w-full py-5 text-[20px] font-bold  bg-[#26253A] text-white rounded hover:bg-[#222222]  transition duration-300">Sign Up Now</button>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8 wow fadeInUp" data-wow-delay="1.6s">
            <div className="p-8 border rounded-lg shadow-lg text-white hover:bg-white text-center hover:text-black">
              <h3 className="text-[50px] font-extrabold mb-4 italic">Rigid Body</h3>
              <div className=" mx-auto w-32 h-32 flex items-center justify-center text-4xl font-bold mb-4 bg-gray-700 rounded-full">
  <span className="text-xl">$</span>750
</div>

              <ul className="mb-4 font-bold text-[25px]">
                <li className="mb-2">Three Personal Trainers</li>
                <li className="mb-2">Gym Services</li>
                <li className="mb-2">15 Yoga Courses</li>
                <li className="mb-2">20 Thai Massages</li>
                <li className="mb-2">35 Aerobics</li>
              </ul>
              <button className="w-full py-5 text-[20px] font-bold  bg-[#26253A] text-white rounded hover:bg-[#222222]  transition duration-300">Sign Up Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
