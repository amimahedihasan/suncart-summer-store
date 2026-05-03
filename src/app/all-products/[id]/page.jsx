import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLeft, HiOutlineShoppingBag, HiStar } from "react-icons/hi";

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://assignment-08-eight.vercel.app/data.json");
    const AllProducts = await res.json();
    const product = AllProducts.find(p => p.id == id);
    
    return (
        <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 transition mb-8">
          <HiOutlineArrowLeft /> <span>Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          
          {/* Product Image */}
          <div className="relative group overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center">
            <Image
              width={600}
              height={600}
              src={product.image}
              alt={product.name}
              className="object-cover rounded-2xl w-full h-[400px] lg:h-[500px] hover:scale-105 transition-transform duration-500"
            />
            {product.stock < 5 && (
              <Chip color="danger" variant="flat" className="absolute top-4 right-4 shadow-lg">
                Only {product.stock} left!
              </Chip>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">
              {product.brand} • {product.category}
            </p>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full gap-1 font-bold">
                <HiStar /> {product.rating}
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-green-600 font-medium">In Stock ({product.stock})</span>
            </div>

            <p className="text-3xl font-bold text-slate-900 mb-6">
              ${product.price.toFixed(2)}
            </p>

            <div className="border-t border-b border-gray-100 py-6 mb-8">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                color="warning" 
                className="font-bold text-white px-10 h-14 text-lg shadow-xl shadow-orange-200"
                startContent={<HiOutlineShoppingBag size={24} />}
              >
                Add to Cart
              </Button>
              <Button 
                size="lg" 
                variant="bordered" 
                className="font-bold border-slate-800 text-slate-800 h-14 px-10"
              >
                Wishlist
              </Button>
            </div>

            {/* Quick Specs */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50 rounded-xl">
                <p className="text-xs text-orange-400 uppercase font-bold">Category</p>
                <p className="text-slate-700 font-semibold">{product.category}</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-xs text-blue-400 uppercase font-bold">Shipping</p>
                <p className="text-slate-700 font-semibold">Free Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DetailsPage;