import Link from "next/link"

export const metadata = { 
    title: "Public information page"
}

export default function Home() {
  return (
    <div className="bg-black bg-[url('/images/home-img.jpg')] bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        {/**dvh is dynamic view port height */}
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/80 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Dan&apos;s Computer<br />Schop</h1>
          <address>
            555 Gateway Lane<br />
            Kansas City, KS 555555
          </address>
          <p>
            Open Daily: 9am to 5pm
          </p>
          <Link 
            href="tel: 1234598765" 
            className="hover:underline"
          >
          123-459-8765
          </Link>
        </div>
      </main>
    </div>
    
  );
}
