import { Button, Card, CardFooter } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiStar } from 'react-icons/hi';

const page = async () => {
    const res = await fetch('https://assignment-08-eight.vercel.app/data.json');
    const popularProducts = await res.json();

    return (
        <div>
            <section>
        <h2 className="text-3xl font-bold text-center mb-10">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <Card shadow="sm" key={product.id} >
              
                <Image
                  shadow="sm"
                  radius="lg"
                        
                          height={200}
                          width={200}
                  alt={product.name}
                  className="w-full object-cover h-[240px] rounded-2xl"
                  src={product.image}
                />
              
              <CardFooter className="flex flex-col items-start gap-2">
                <div className="flex justify-between w-full">
                  <b className="text-lg">{product.name}</b>
                  <p className="text-orange-500 font-bold">${product.price}</p>
                </div>
                <div className="flex items-center text-yellow-500 gap-1">
                  <HiStar /> <span className="text-gray-600 text-sm">{product.rating}</span>
                      </div>
                      <Link href={`/all-products/${product.id}`} className="w-full">
                <Button fullWidth color="primary" variant="secondary" size="sm">
                  View Details
                </Button>
                      
                      </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
        </div>
    );
};

export default page;