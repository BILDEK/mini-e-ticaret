// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MiniEcom
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-300">
                Ürünler
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-gray-300">
                Sepet
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}