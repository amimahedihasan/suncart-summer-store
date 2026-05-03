import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { HiOutlineFire, HiOutlineShoppingBag } from 'react-icons/hi';
import 'animate.css';
const Banner = () => {
    return (
        <div className=' my-5'>
            <section className=" relative w-full bg-linear-to-r from-orange-50 via-yellow-50 to-orange-100 py-12 lg:py-20 overflow-hidden">
  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <div className="z-10 text-center lg:text-left">
      <div className="inline-flex items-center gap-2 bg-orange-200 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
        <HiOutlineFire size={18} className="animate-bounce" />
        Hot Deals 🔥
      </div>
      
      <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-800 leading-tight mb-6 animate__animated animate__bounceInLeft">
        Grab the Best <br />
        <span className="text-orange-500 italic animate__animated  animate__bounceInRight">Summer Sale</span>
      </h1>
      
      <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
        Brighten up your season with our exclusive collection. Get an instant <span className="font-bold text-orange-600 underline">50% OFF</span> on all summer essentials!
      </p>

      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        <Button 
          size="lg" 
          color="warning" 
          variant="shadow"
          className="font-bold text-white px-8"
          startContent={<HiOutlineShoppingBag size={20} />}
        >
          Shop Now
        </Button>
        <Button
          size="lg" 
          variant="bordered" 
          className="font-semibold border-slate-800 text-slate-800"
        >
          View Offers
        </Button>
      </div>

      <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">
        <div>
          <p className="text-3xl font-bold text-slate-800">50%</p>
          <p className="text-sm text-slate-500 uppercase tracking-widest">OFF</p>
        </div>
        <div className="w-[1px] h-10 bg-slate-300"></div>
        <div>
          <p className="text-3xl font-bold text-slate-800">9K+</p>
          <p className="text-sm text-slate-500 uppercase tracking-widest">Products</p>
        </div>
      </div>
    </div>

    {/* Right Content - Banner Image */}
    <div className="relative flex justify-center items-center">
      {/* Decorative Circle Background */}
      <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-orange-300/30 rounded-full blur-3xl -z-0"></div>
      
      <div className="relative z-10 hover:scale-105 transition-transform duration-500">
        <Image
        //   isBlurred
                                width={500}
                                height={300}
          src="https://images.pexels.com/photos/1545501/pexels-photo-1545501.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Summer Sale Banner"
          className="rounded-2xl shadow-2xl object-cover h-[400px] lg:h-[500px]"
        />
        {/* Floating Tag */}
        <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-xl z-20 flex flex-col items-center animate-pulse">
          <span className="text-xs text-gray-500">Starting from</span>
          <span className="text-2xl font-bold text-orange-500">$15.00</span>
        </div>
      </div>
    </div>

  </div>
</section>
        </div>
    );
};

export default Banner;