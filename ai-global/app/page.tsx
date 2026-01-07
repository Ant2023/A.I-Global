import Navbar from "./components/Navbar";
import Services from "./components/Services";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4">
          A.I Global Business Services
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Building scalable systems for modern applications.
        </p>
      </section>
      <Services />

    </main>
  );
}
