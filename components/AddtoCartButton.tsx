'use client';

import React from 'react';
import Swal from 'sweetalert2';
import { addToCart } from '@/app/actions/action';
import { Product } from '@/types/product';

export default function AddToCartButton({ product }: { product: Product }) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Added ${product.name} to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
    >
      Add to Cart
    </button>
  );
}

