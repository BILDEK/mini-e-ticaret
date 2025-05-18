import Image from 'next/image' // Bunu şimdilik kullanmayacağız ama kalsın

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">

          Mini E-Ticaret Sitemize Hoş Geldiniz!
          
        </h1>
      </div>
    </main>
  )
}