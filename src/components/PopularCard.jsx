import { Button, Card, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLightBulb, HiStar } from "react-icons/hi";
import 'animate.css';

const PopularCard = async () => {
    
    const res = await fetch('https://assignment-08-eight.vercel.app/data.json');
    const popularProducts = await res.json();

    return (
        <div className="container mx-auto px-6 space-y-32 py-20 bg-white selection:bg-orange-100">
      
      {/* 1. Popular Products Section */}
      <section className="py-16">

  <div className="flex flex-col items-center mb-12 space-y-2">
    <span className="text-orange-500 font-semibold tracking-widest uppercase text-xs">
      Summer Essentials
    </span>

    <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center">
      Popular Products
    </h2>

    <div className="h-1.5 w-20 bg-orange-400 rounded-full"></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

    {popularProducts.slice(0, 3).map((product) => (
      <Card
        key={product.id}
        className="
          group
          border border-orange-100
          bg-gradient-to-b from-white via-orange-50 to-yellow-50
          hover:from-white hover:via-white hover:to-white
          transition-all duration-500
          hover:shadow-[0_25px_60px_rgba(249,115,22,0.15)]
          overflow-hidden
          rounded-2xl
        "
        shadow="none"
      >

        <div className="relative overflow-hidden aspect-[4/5]">

          <Image
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            src={product.image}
            height={400}
            width={400}
          />

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm border border-orange-100">
            <HiStar className="text-yellow-500" />
            <span className="text-slate-700 font-bold text-sm">
              {product.rating}
            </span>
          </div>

        </div>

        <CardFooter className="flex flex-col items-start p-6 gap-4">

          <div className="flex justify-between items-start w-full">

            <div>
              <h3 className="text-xl font-bold text-slate-800 leading-tight">
                {product.name}
              </h3>

              <p className="text-slate-400 text-sm mt-1 uppercase tracking-tighter">
                Premium Collection
              </p>
            </div>

            <p className="text-2xl font-black text-orange-500">
              ${product.price}
            </p>

          </div>

          <Link href={`/all-products/${product.id}`} className="w-full">

            <Button
              fullWidth
              className="
                bg-gradient-to-r from-slate-900 to-slate-800
                hover:from-orange-500 hover:to-orange-600
                text-white font-bold py-6 rounded-xl
                transition-all duration-300
                shadow-md hover:shadow-xl
              "
            >
              View Details
            </Button>

          </Link>

        </CardFooter>

      </Card>
    ))}

  </div>

</section>

      {/* 2. Summer Care Tips Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 p-8 md:p-16 rounded-[2.5rem] border border-blue-100/50">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl"></div>
        
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 text-center mb-12 flex justify-center items-center gap-4">
          <div className="p-3 bg-white rounded-2xl shadow-sm">
            <HiOutlineLightBulb className="text-yellow-500 text-3xl animate__animated animate__pulse animate__infinite" />
          </div>
          Summer Care Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 font-black group-hover:bg-blue-500 group-hover:text-white transition-colors">01</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800 uppercase tracking-tight">Stay Hydrated</h3>
            <p className="text-slate-600 leading-relaxed">Drink at least 8-10 glasses of water daily to keep your skin glowing and fresh.</p>
          </div>

          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 font-black group-hover:bg-orange-500 group-hover:text-white transition-colors">02</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800 uppercase tracking-tight">Sun Protection</h3>
            <p className="text-slate-600 leading-relaxed">Always apply SPF 50+ sunscreen 15 minutes before stepping out into the sun.</p>
          </div>

          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 font-black group-hover:bg-emerald-500 group-hover:text-white transition-colors">03</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800 uppercase tracking-tight">Wear Cotton</h3>
            <p className="text-slate-600 leading-relaxed">Choose light-colored cotton fabrics to let your skin breathe during peak heat.</p>
          </div>
        </div>
      </section>

      {/* 3. Top Brands Section */}
     <section className="py-16">

  <div className="flex items-center gap-6 mb-12">
    <h2 className="text-2xl font-black text-orange-500 whitespace-nowrap uppercase tracking-widest">
      Trust the Best
    </h2>
    <div className="h-px w-full bg-gradient-to-r from-orange-200 via-yellow-200 to-transparent"></div>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {['SunShade', 'GlowGuard', 'AquaFlow', 'SummerVibe'].map((brand) => (
      <Card
        key={brand}
        className="
          flex items-center justify-center
          p-10
          rounded-2xl
          bg-gradient-to-br from-white via-orange-50 to-yellow-50
          border border-orange-100
          shadow-sm
          hover:shadow-xl
          hover:scale-[1.03]
          transition-all duration-300
          group
        "
      >
        <span
          className="
            text-xl md:text-2xl
            font-black
            text-slate-400
            group-hover:text-orange-600
            uppercase italic
            tracking-tight
            transition-colors duration-300
          "
        >
          {brand}
        </span>
      </Card>
    ))}

  </div>
</section>

    </div>
    );
};

export default PopularCard;