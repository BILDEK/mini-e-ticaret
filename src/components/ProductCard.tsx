// src/components/ProductCard.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} legacyBehavior>
      <a className="block bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
        <div className="relative w-full h-60"> {/* Parent'a boyut verdik */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill // layout="fill" yerine sadece fill
            style={{ objectFit: 'cover' }} // objectFit'i style prop'u içine aldık
            className="group-hover:opacity-90 transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Opsiyonel ama iyi bir pratik
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 h-10 overflow-hidden">
            {product.shortDescription}
          </p>
          <p className="text-2xl font-bold text-indigo-700 mb-4">
            {product.price.toFixed(2)} TL
          </p>
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-2"
            onClick={(e) => {
              e.preventDefault(); // Link navigasyonunu engelle
              alert(`${product.name} sepete eklendi! (Fonksiyonel değil)`);
            }}
          >
            Sepete Ekle
          </button>
        </div>
      </a>
    </Link>
  );
}