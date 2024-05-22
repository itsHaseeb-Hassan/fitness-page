import React from 'react';
import overviewImg from '../assets/images/overview-img.jpg'; 

const OverviewSection = () => {
  return (
    <section className="bg-cover bg-fixed my-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-6 mb-8 md:mb-0 relative bg-white border-8">
            <img src={overviewImg} className="img-responsive w-full" alt="Overview" />
            <div className="absolute bottom-0 right-0 bg-white border-l-8 border-black p-4 z-10 animate-fadeInUp  transform translate-y-28 translate-x-24 shadow-2xl h-[300px] w-full m-2" >
              <blockquote className=" p-10 font-bold text-[30px]" data-wow-delay="1.9s">
                Fitness is a free website template that can be used for any company. You may download, modify, and use this layout for your website.
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-1/12"></div>

          <div className="animate-fadeInUp w-full md:w-1/3 px-4" data-wow-delay="1s">
            <div className="overview-detail">
              <h2 className="text-[30px] font-semibold mb-4 leading-8 tracking-[5px] uppercase">About Fitness</h2>
              <p className="my-4 text-[23px] font-bold leading-[30px] text-[#707070] tracking-[0.4px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat.</p>
              <p className="my-4 text-[23px] font-bold leading-[30px] text-[#707070] tracking-[0.4px]">
                Fitness web template includes total 2 pages. This is an index (main) page and another is a <a href="blog-single.html" className="text-blue-500 underline">blog page</a>.
              </p>
              <button className="w-full py-5 text-[20px] font-bold  bg-[#26253A] text-white rounded hover:bg-[#222222]  transition duration-300">Let Us Begin</button>
            </div>
          </div>

          <div className="w-full md:w-1/12"></div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
