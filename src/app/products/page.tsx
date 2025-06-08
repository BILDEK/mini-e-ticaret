// src/app/products/page.tsx
import ProductCard from '@/components/ProductCard';
import { productsData } from '@/data/products'; // Sahte verilerimizi import ediyoruz
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tüm Ürünler - MiniEcom',
  description: 'Mağazamızdaki tüm harika ürünleri keşfedin.',
};

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Tüm Ürünler
      </h1>
      {productsData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Şu anda listelenecek ürün bulunmamaktadır.</p>
      )}
    </div>
  );
}