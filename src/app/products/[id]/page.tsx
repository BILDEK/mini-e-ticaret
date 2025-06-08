// src/app/products/[id]/page.tsx
"use client"; // <<< EĞER BU SAYFA DA AYNI HATAYI VERİYORSA EKLE


import { productsData } from '@/data/products';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata, ResolvingMetadata } from 'next';

interface ProductDetailPageProps {
  params: { id: string };
}

// Sahte veriden ürünü ID'ye göre bulma fonksiyonu
async function getProductById(id: string): Promise<Product | undefined> {
  // Gerçek uygulamada burada bir API çağrısı veya veritabanı sorgusu yapılır
  return productsData.find((product) => product.id === id);
}

// Dinamik metadata oluşturma
export async function generateMetadata(
  { params }: ProductDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product) {
    return {
      title: 'Ürün Bulunamadı - MiniEcom',
    };
  }
  return {
    title: `${product.name} - MiniEcom`,
    description: product.shortDescription,
    openGraph: { // Sosyal medya paylaşımları için
      images: [product.imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Ürün Bulunamadı</h1>
        <p className="text-gray-600 mb-8">
          Aradığınız ürün mevcut değil veya kaldırılmış olabilir.
        </p>
        <Link href="/products" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Tüm Ürünlere Göz At
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Ürün Görseli */}
                <div className="relative w-full aspect-square rounded-lg shadow-xl overflow-hidden"> {/* Parent'a boyut verdik */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw" // Opsiyonel ama iyi bir pratik
          />
        </div>

        {/* Ürün Bilgileri */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {product.longDescription}
          </p>
          <p className="text-4xl font-bold text-indigo-700 mb-8">
            {product.price.toFixed(2)} TL
          </p>
          <div className="flex space-x-4">
            <button
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300 text-lg shadow-md"
              onClick={() => alert(`${product.name} sepete eklendi! (Fonksiyonel değil)`)}
            >
              Sepete Ekle
            </button>
            <Link
              href="/products"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-300 text-lg text-center"
            >
              Geri Dön
            </Link>
          </div>
          {product.category && (
            <p className="text-sm text-gray-500 mt-6">
              Kategori: <span className="font-semibold">{product.category}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}