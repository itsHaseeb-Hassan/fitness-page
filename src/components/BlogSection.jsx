import React from 'react';

const BlogSection = () => {
  return (
    <section id="blog" className="relative bg-fixed bg-cover bg-center py-16" style={{ backgroundImage: 'url(/path/to/your/parallax-image.jpg)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 ">
          <h2 className="text-4xl font-bold mb-4">Fitness Blog</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className=" w-full md:w-1/2 px-4 mb-8" >
            <div className=" p-20 border rounded-lg shadow-lg hover:bg-bgimage bg-cover ">
              <span className="block text-gray-600 mb-2">Body Fitness / July 2, 2016</span>
              <h3 className="text-2xl font-bold mb-2"><a href="blog-single.html" className="text-blue-600 hover:underline">How to get a fitness model body?</a></h3>
              <h5 className="text-gray-700">by David Walker</h5>
            </div>
          </div>

          <div className=" w-full md:w-1/2 px-4 mb-8" data-wow-delay="1.3s">
            <div className=" p-20 border rounded-lg shadow-lg hover:bg-bgimage bg-cover">
              <span className="block text-gray-600 mb-2">Healthy Fit / June 8, 2016</span>
              <h3 className="text-2xl font-bold mb-2"><a href="blog-single.html" className="text-blue-600 hover:underline">Personal Fitness Tips</a></h3>
              <h5 className="text-gray-700">by George</h5>
            </div>
          </div>

          <div className=" w-full md:w-1/2 px-4 mb-8" data-wow-delay="1.6s">
            <div className="p-20 border rounded-lg shadow-lg hover:bg-bgimage bg-cover">
              <span className="block text-gray-600 mb-2">Gym Services / May 9, 2016</span>
              <h3 className="text-2xl font-bold mb-2"><a href="blog-single.html" className="text-blue-600 hover:underline">Efficient Workout Plans</a></h3>
              <h5 className="text-gray-700">by Mary Louis</h5>
            </div>
          </div>

          <div className=" w-full md:w-1/2 px-4 mb-8" data-wow-delay="1.9s">
            <div className=" p-20 border rounded-lg shadow-lg hover:bg-bgimage bg-cover">
              <span className="block text-gray-600 mb-2">Practice Aerobics / April 18, 2016</span>
              <h3 className="text-2xl font-bold mb-2"><a href="blog-single.html" className="text-blue-600 hover:underline">How to practice Aerobics?</a></h3>
              <h5 className="text-gray-700">by Michael Fit</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;