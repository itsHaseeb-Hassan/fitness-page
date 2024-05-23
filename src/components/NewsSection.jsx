import React from 'react'
import newsbg from '../assets/images/newsletter-bg.jpg'
const NewsSection = () => {
  return (
    <div>
         <section id="newsletter" className="relative bg-fixed bg-cover bg-center py-16" style={{ backgroundImage: `url(${newsbg})` }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="animate fadeInUp w-full md:w-8/12 sm:w-10/12" data-wow-delay="0.9s">
            <h2 className="text-center text-4xl font-bold mb-4">Signup Newsletter</h2>
            <p className="text-center text-lg mb-8">Get discounts for your personal fitness and gym services now.</p>
            <div >
              <form action="#" method="post" id="newsletter-signup" className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <input name="name" type="text" className="form-control w-full px-4 py-2 border border-gray-300 rounded" id="name" placeholder="Name" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <input name="email" type="email" className="form-control w-full px-4 py-2 border border-gray-300 rounded" id="email" placeholder="Email" />
                </div>
                <div className="w-full md:w-6/12 px-2 mt-4 mx-auto">
                  <input name="submit" type="submit" className="form-control w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300" id="submit" value="SEND MESSAGE" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default NewsSection