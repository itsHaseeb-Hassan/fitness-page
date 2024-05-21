import React from 'react';
import overviewImg from '../assets/images/overview-img.jpg'; 

const OverviewSection = () => {
  return (
    <section  className="bg-cover bg-fixed my-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img src={overviewImg} className="img-responsive w-full" alt="Overview" />
            <blockquote className="animate-fadeInUp mt-4" data-wow-delay="1.9s">
              Fitness is a free website template that can be used for any company. You may download, modify, and use this layout for your website.
            </blockquote>
          </div>

          <div className="w-full md:w-1/12"></div>

          <div className="animate-fadeInUp w-full md:w-1/3 px-4" data-wow-delay="1s">
            <div className="overview-detail">
              <h2 className="text-[30px] font-semibold mb-4 leading-8 tracking-[5px] uppercase">About Fitness</h2>
              <p className="my-4 text-[20px] font-light leading-[25px] text-[#707070] tracking-[0.4px] ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat.</p>
              <p className="my-4 text-[20px] font-light leading-[25px] text-[#707070] tracking-[0.4px]">
                Fitness web template includes total 2 pages. This is an index (main) page and another is a <a href="blog-single.html" className="text-blue-500 underline">blog page</a>.
              </p>
              <a href="#trainer" className="btn btn-default smoothScroll bg-gray-200 px-4 py-2 rounded">Let us begin</a>
            </div>
          </div>

          <div className="w-full md:w-1/12"></div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;