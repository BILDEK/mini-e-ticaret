import Image from 'next/image' // Bunu şimdilik kullanmayacağız ama kalsın
// src/app/page.tsx
import Link from 'next/link'; // Link bileşenini import ediyoruz

export default function HomePage() {
  return (
    <div>
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4 text-center rounded-lg shadow-xl mb-12">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">
          Mağazamıza Hoş Geldiniz!
        </h1>
        <p className="text-xl mb-8 animate-fade-in-up">
          En yeni ve en harika ürünleri keşfedin. Kalite ve uygun fiyat bir arada!
        </p>
        <Link
          href="/products" // Şimdilik /products diye bir sayfamız yok ama ilerde olacak
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-full text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Alışverişe Başla
        </Link>
      </section>

      {/* Öne Çıkan Ürünler Bölümü */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Öne Çıkanlar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Örnek Ürün Kartı 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Ürün Resmi</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Harika Ürün 1</h3>
              <p className="text-gray-600 text-sm mb-4">
                Bu ürünün kısa ve çekici bir açıklaması burada yer alacak.
              </p>
              <p className="text-2xl font-bold text-indigo-600 mb-4">99.99 TL</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                Sepete Ekle
              </button>
            </div>
          </div>

          {/* Örnek Ürün Kartı 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Ürün Resmi</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Süper Ürün 2</h3>
              <p className="text-gray-600 text-sm mb-4">
                Bu başka bir harika ürün ve onun da etkileyici bir açıklaması var.
              </p>
              <p className="text-2xl font-bold text-indigo-600 mb-4">149.50 TL</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                Sepete Ekle
              </button>
            </div>
          </div>

          {/* Örnek Ürün Kartı 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Ürün Resmi</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Eşsiz Ürün 3</h3>
              <p className="text-gray-600 text-sm mb-4">
                Bu ürün kesinlikle kaçırılmaması gereken özel bir parça.
              </p>
              <p className="text-2xl font-bold text-indigo-600 mb-4">75.00 TL</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}