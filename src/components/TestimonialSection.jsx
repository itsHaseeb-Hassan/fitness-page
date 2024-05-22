import React from 'react';


const TestimonialSection = () => {


  return (
    <section
      id="testimonial"
      className="relative bg-fixed bg-cover bg-center py-16"
    >
      <div className="container mx-auto px-4">
          <div className="item mx-auto wow fadeInUp" data-wow-delay="0.6s">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <i className="fa fa-quote-left text-4xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold mb-4">
                Sed dapibus rutrum lobortis. Sed nec interdum nunc, quis sodales
                ante. Maecenas volutpat congue.
              </h3>
              <h4 className="text-gray-700">Mark Otto ( New Cyclist )</h4>
            </div>
          </div>
       
      </div>
    </section>
  );
};

export default TestimonialSection;
