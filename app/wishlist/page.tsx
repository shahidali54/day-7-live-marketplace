'use client';
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import Link from 'next/link';
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';
import AddToCartButton from '@/components/AddtoCartButton';
import { urlFor } from '@/sanity/lib/image';
import Top_Head from '../multiy-components/headers/top-header';
import Header from '../multiy-components/headers/header';

export default function Wishlist() {
    const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);

    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            setWishlistProducts(JSON.parse(savedWishlist));
        }
    }, []);

    useEffect(() => {
        if (wishlistProducts.length > 0) {
            localStorage.setItem('wishlist', JSON.stringify(wishlistProducts));
        }
    }, [wishlistProducts]);

    const handleRemoveFromWishlist = (productId: string) => {
        setWishlistProducts(wishlistProducts.filter(product => product?._id !== productId));
    };




    return (
        <div className="container mx-auto px-4 py-8">
            <Top_Head />
            <Header />
            {wishlistProducts.length > 0 ? (
                <>
                    <div className="flex justify-between items-center p- mb-6">
                        <h1 className="text-3xl font-bold">My Wishlist</h1>

                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlistProducts.map((product: Product, index) => (
                            <div key={`${product?._id}-${index}`} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">

                                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                                    <Link href="/shop" className="text-blue-500 hover:underline">Continue Shopping</Link>
                                    <Image
                                        src={urlFor(product.image).url()}
                                        alt={product.title || 'Product image'}
                                        width={500}
                                        height={500}
                                        className="object-cover rounded-lg transition-transform transform hover:scale-105"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-xl font-semibold">{product?.title || 'No Title'}</h2>
                                    <p className="text-gray-500 text-sm">{product?.description?.substring(0, 100) || 'No Description'}...</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-lg font-bold text-gray-800">${product?.price || '0.00'}</span>
                                        {product?.discountPercentage > 0 && (
                                            <span className="text-sm text-green-500">
                                                {product?.discountPercentage}% Off
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <AddToCartButton product={product} />
                                        <button
                                            onClick={() => handleRemoveFromWishlist(product._id)}
                                            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                        >
                                            <FiHeart size={18} /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen text-gray-500">
                    <FiHeart size={48} className="mb-4" />
                    <p>Your wishlist is empty.</p>
                    <Link href="/productpage" className="mt-4 text-blue-500 hover:underline">Browse Products</Link>
                </div>
            )}
        </div>
    );
}