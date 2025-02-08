"use client"

import { addToCart } from '@/app/actions/action';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { shirtBanner } from '@/sanity/lib/querry';
import { Product } from '@/types/product';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function ClassicSection() {


  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products: Product[] = await client.fetch(shirtBanner);
      setAllProducts(products);
    }
    fetchProducts();
  }, []);


  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    })
    addToCart(product);
  };

  return (
    <section className="bg-[#23856D] py-20">
      {allProducts.map((item) => (
        <div key={item._id} className="container mx-auto flex flex-col lg:flex-row items-center px-5 lg:px-20 gap-10">
          <div className="lg:w-1/2 w-full text-center lg:text-left mb-10 lg:mb-0 py-10 px-6 rounded-lg">
            <p className="text-white text-sm mb-2 font-semibold">SUMMER 2020</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white my-6">
              {item.title}
            </h1>

            <p className="text-lg text-gray-200 mb-6">
              {item.description}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <p className="text-white text-xl font-semibold">
                {item.price}
              </p>

              <Button
                className="bg-green-600  text-white h-8 sm:h-10 rounded-[4px] text-sm sm:text-base font-medium px-3 sm:px-4"
                onClick={(e) => handleAddToCart(e, item)}
              >
                Add To Cart
              </Button>

            </div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center ">
            {item.productImage && (

              <Image
                src={urlFor(item.productImage).url()}
                alt="Hero Image"
                width={500}
                height={400}
                className="object-cover max-w-full h-auto px-20 relative top-20"
                priority
              />
            )}
          </div>
        </div>
      ))}
    </section>
  );
}