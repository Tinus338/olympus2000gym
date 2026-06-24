export default function Home() {
  return (
    <main className="bg-black text-white">

      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="text-center max-w-4xl">

          <p className="text-red-500 uppercase tracking-[0.3em] mb-4">
            Olympus 2000 Gym Wageningen
          </p>

          <h1 className="text-6xl md:text-8xl font-black uppercase mb-6">
            Geen poespas.
            <br />
            Gewoon trainen.
          </h1>

          <p className="text-xl text-gray-400 mb-8">
            Dé sportschool in Wageningen voor krachttraining,
            conditie, gezondheid en persoonlijke ontwikkeling.
          </p>

          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold"
          >
            Gratis proeftraining
          </a>

        </div>

      </section>

    </main>
  )
}