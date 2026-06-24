'use client'

import { useState, useEffect } from 'react'
import ReCAPTCHA from "react-google-recaptcha"
export default function Home() {
async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Bericht verzonden! 💪");
      e.target.reset();
    } else {
      alert("Er ging iets mis ❌");
      console.log(result.error);
    }
  } catch (error) {
    console.log(error);
    alert("Er ging iets mis ❌");
  }
}
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Olympus 2000 Gym",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrieweg 46a",
    addressLocality: "Wageningen",
    addressCountry: "NL",
  },
  telephone: "0317415625",
  url: "https://jouwdomein.nl",
};
  const [menuOpen, setMenuOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const handleSubmit = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    website: formData.get("website"),
  }

  const response = await fetch("/api/test-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (result.success) {
   setSuccessMessage(
  "Bedankt! Je aanvraag is succesvol verzonden. We nemen zo snel mogelijk contact met je op."
)
    e.target.reset()
  } else {
    alert("Er ging iets mis. Probeer het opnieuw.")
  }
}
  const [showCookies, setShowCookies] = useState(false)

useEffect(() => {
  const accepted = localStorage.getItem('cookiesAccepted')

  if (!accepted) {
    setShowCookies(true)
  }
}, [])
  const services = [
    {
      title: "Vrije Fitness",
      text: "Train zelfstandig met moderne apparatuur in een no-nonsense omgeving.",
    },
    {
      title: "Krachttraining",
      text: "Werk gericht aan spiermassa, kracht en prestaties.",
    },
    {
      title: "Conditietraining",
      text: "Verbeter je conditie en algehele gezondheid.",
    },
    {
      title: "Personal Training",
      text: "Persoonlijke begeleiding voor sneller resultaat.",
    },
    {
      title: "Trainingsadvies",
      text: "Praktische adviezen afgestemd op jouw doelen.",
    },
    {
      title: "Trainingsschema's",
      text: "Op maat gemaakte trainingsprogramma's.",
    },
  ]

  return (
   <main className="bg-black text-white">

  {/* NAVBAR */}

  <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">

    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(localBusinessSchema),
  }}
/>
     <div className="flex items-center gap-3">
 <img
  src="/logo.png"
  alt="Olympus 2000 Gym Logo"
  style={{
    width: "60px",
    height: "60px",
    objectFit: "contain",
    flexShrink: 0,
  }}
/>

  <h2 className="text-xl md:text-2xl font-black uppercase tracking-wide">
    Olympus 2000 Gym
  </h2>
</div>

      {/* Desktop Menu */}

      <nav className="hidden md:flex gap-8 text-sm uppercase">

        <a href="#about">Over Ons</a>

        <a href="#services">Diensten</a>

        <a href="#contact">Contact</a>

      </nav>

      {/* Hamburger */}

      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </div>

    {menuOpen && (

      <div className="md:hidden bg-zinc-950 border-t border-white/10">

        <a
          href="#about"
          className="block px-6 py-4"
        >
          Over Ons
        </a>

        <a
          href="#services"
          className="block px-6 py-4"
        >
          Diensten
        </a>

        <a
          href="#contact"
          className="block px-6 py-4"
        >
          Contact
        </a>

      </div>

    )}

  </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">

        <div className="text-center max-w-5xl">

          <p className="text-red-500 uppercase tracking-[0.3em] mb-6">
            Olympus 2000 Gym Wageningen
          </p>

          <h1 className="text-6xl md:text-8xl font-black uppercase mb-8">
            Geen poespas.
            <br />
            Gewoon trainen.
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Olympus 2000 Gym Wageningen is dé plek voor sporters die serieus
            willen werken aan kracht, conditie, gezondheid en persoonlijke
            ontwikkeling.
          </p>

          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold"
          >
            Gratis proeftraining
          </a>

        </div>

      </section>

      {/* OVER ONS */}
      <section
  id="about"
  className="py-24 bg-zinc-950"
>

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-red-500 uppercase tracking-[0.3em] mb-4">
              Over Ons
            </p>

            <h2 className="text-5xl font-black uppercase">
              Olympus 2000 Gym
            </h2>

          </div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">

            <p>
              Olympus 2000 Wageningen is een bekende en toegankelijke
              sportschool waar krachttraining, conditie en persoonlijke
              ontwikkeling centraal staan.
            </p>

            <p>
              Wat Olympus onderscheidt is de combinatie van een no-nonsense
              trainingsmentaliteit en een complete trainingsomgeving voor
              zowel beginners als ervaren sporters.
            </p>

            <p>
              Hier draait het niet om luxe of uiterlijk vertoon, maar om
              effectief trainen en resultaat behalen.
            </p>

          </div>

        </div>

      </section>

      {/* DIENSTEN */}
     <section
  id="services"
  className="py-24"
>

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-red-500 uppercase tracking-[0.3em] mb-4">
              Diensten
            </p>

            <h2 className="text-5xl font-black uppercase">
              Waar wij mee helpen
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-zinc-900 rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400">
                  {service.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* OPENINGSTIJDEN */}
      <section className="py-24 bg-zinc-950">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-red-500 uppercase tracking-[0.3em] mb-4">
              Openingstijden
            </p>

            <h2 className="text-5xl font-black uppercase">
              Train wanneer het jou uitkomt
            </h2>

          </div>

          <div className="bg-black rounded-3xl p-8 border border-white/10 space-y-4">

            <div className="flex justify-between">
              <span>Maandag</span>
              <span>07:00 - 22:00</span>
            </div>

            <div className="flex justify-between">
              <span>Dinsdag</span>
              <span>07:00 - 22:00</span>
            </div>

            <div className="flex justify-between">
              <span>Woensdag</span>
              <span>07:00 - 22:00</span>
            </div>

            <div className="flex justify-between">
              <span>Donderdag</span>
              <span>07:00 - 22:00</span>
            </div>

            <div className="flex justify-between">
              <span>Vrijdag</span>
              <span>07:00 - 22:00</span>
            </div>

            <div className="flex justify-between">
              <span>Zaterdag</span>
              <span>09:00 - 21:00</span>
            </div>

            <div className="flex justify-between">
              <span>Zondag</span>
              <span>09:00 - 21:00</span>
            </div>

          </div>

        </div>

      </section>
      {/* LIDMAATSCHAPPEN */}
      <section className="py-24 bg-black">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-red-500 uppercase tracking-[0.3em] mb-4">
              Lidmaatschappen
            </p>

            <h2 className="text-5xl font-black uppercase">
              Kies jouw plan
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { name: "Starter", price: "€29" },
              { name: "Premium", price: "€39" },
              { name: "Student", price: "€24" },
            ].map((plan) => (

              <div
                key={plan.name}
                className="bg-zinc-900 rounded-3xl p-8 border border-white/10"
              >

                <h3 className="text-3xl font-black mb-4">
                  {plan.name}
                </h3>

                <div className="text-5xl font-black text-red-500 mb-6">
                  {plan.price}
                </div>

                <p className="text-gray-400 mb-6">
                  Neem contact op voor actuele voorwaarden.
                </p>

                <a
                  href="#contact"
                  className="block text-center bg-red-600 py-4 rounded-xl font-bold"
                >
                  Meer informatie
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-zinc-950">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-red-500 uppercase tracking-[0.3em] mb-4">
              Reviews
            </p>

            <h2 className="text-5xl font-black uppercase">
              Wat leden zeggen
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-black rounded-3xl p-8 border border-white/10">

              <div className="text-red-500 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 mb-4">
                Fijne sportschool met een goede sfeer en voldoende apparatuur.
              </p>

              <strong>Google Review</strong>

            </div>

            <div className="bg-black rounded-3xl p-8 border border-white/10">

              <div className="text-red-500 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 mb-4">
                No-nonsense gym waar je echt kunt trainen.
              </p>

              <strong>Google Review</strong>

            </div>

          </div>

          <div className="text-center mt-10">

            <p className="text-2xl font-bold mb-6">
              Google Score: 5.0 / 5 ⭐
            </p>

            <a
              href="https://www.google.com/search?q=Olympus+2000+Gym+Wageningen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 px-8 py-4 rounded-xl font-bold inline-block"
            >
              Bekijk Google Reviews
            </a>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="py-24 bg-black">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-black uppercase text-center mb-12">
            Veelgestelde Vragen
          </h2>

          <div className="space-y-6">

            <details className="bg-zinc-900 rounded-2xl p-6">
              <summary className="font-bold cursor-pointer">
                Kan ik eerst een proeftraining volgen?
              </summary>

              <p className="mt-4 text-gray-400">
                Ja, neem contact op voor een vrijblijvende proeftraining.
              </p>
            </details>

            <details className="bg-zinc-900 rounded-2xl p-6">
              <summary className="font-bold cursor-pointer">
                Is de gym geschikt voor beginners?
              </summary>

              <p className="mt-4 text-gray-400">
                Zeker. Zowel beginners als ervaren sporters trainen bij Olympus.
              </p>
            </details>

            <details className="bg-zinc-900 rounded-2xl p-6">
              <summary className="font-bold cursor-pointer">
                Is begeleiding beschikbaar?
              </summary>

              <p className="mt-4 text-gray-400">
                Ja, wij bieden trainingsadvies en persoonlijke begeleiding.
              </p>
            </details>

          </div>

        </div>

      </section>
            {/* CONTACT */}
      <section
        id="contact"
        className="py-24 bg-zinc-950"
      >

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-red-500 uppercase tracking-[0.3em] mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-black uppercase">
              Start Vandaag
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* INFO */}

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Olympus 2000 Gym
              </h3>

              <div className="space-y-4 text-gray-300">

                <p>
                  📍 Industrieweg 46a
                  <br />
                  6702 DR Wageningen
                </p>

                <p>
                  📞 0317 415 625
                </p>

                <p>
                  ⭐ Google Score: 5.0 / 5
                </p>

              </div>

            </div>

            {/* FORMULIER */}

            <form onSubmit={handleSubmit}>
  className="bg-black p-8 ..."
  onSubmit={handleSubmit}


              <input
                type="text"
                name="name"
                placeholder="Naam"
                className="w-full bg-zinc-900 p-4 rounded-xl"
              />

              <input
                type="email"
                name="email"
                placeholder="E-mailadres"
                className="w-full bg-zinc-900 p-4 rounded-xl"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Telefoonnummer"
                className="w-full bg-zinc-900 p-4 rounded-xl"
              />

              <textarea
                rows="5"
                placeholder="Bericht"
                name="message"
                className="w-full bg-zinc-900 p-4 rounded-xl"
              />

              <label className="flex gap-3 text-sm text-gray-400">

                <input
                  type="checkbox"
                  required
                />

                <span>
                  Ik ga akkoord met het verwerken van mijn gegevens.
                </span>

              </label>
<div className="flex items-start gap-3">
  <input
    type="checkbox"
    required
    className="mt-1"
  />

  <label className="text-sm text-gray-400">
    Ik ga akkoord met het privacybeleid.
  </label>
</div>
{successMessage && (
  <div className="bg-green-900 border-2 border-green-500 text-green-300 rounded-2xl p-4 text-center mb-4">
    {successMessage}
  </div>
)}
{process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
  <ReCAPTCHA
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    className="flex justify-center"
  />
)}
              <button
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold w-full"
              ><input
  type="text"
  name="website"
  className="hidden"
  tabIndex="-1"
  autoComplete="off"
/>
                Verstuur aanvraag
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* GOOGLE MAPS */}

      <section className="bg-black">

        <iframe
          src="https://maps.google.com/maps?q=Industrieweg%2046a%20Wageningen&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="500"
          loading="lazy"
        />

      </section>

      {/* FOOTER */}

      <footer className="bg-zinc-950 py-12 border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div>

              <h3 className="text-2xl font-black mb-4">
                Olympus 2000 Gym
              </h3>

              <p className="text-gray-400">
                Dé sportschool van Wageningen voor kracht,
                conditie en persoonlijke ontwikkeling.
              </p>

            </div>

            <div>

              <h4 className="font-bold mb-4">
                Contact
              </h4>

              <p className="text-gray-400">
                Industrieweg 46a
              </p>

              <p className="text-gray-400">
                Wageningen
              </p>

              <p className="text-gray-400">
                0317 415 625
              </p>

            </div>

            <div>

              <h4 className="font-bold mb-4">
                Handige Links
              </h4>

              <div className="space-y-2">

                <a
                  href="/privacy"
                  className="block text-gray-400 hover:text-white"
                >
                  Privacybeleid
                </a>

                <a
                  href="https://maps.google.com/?q=Industrieweg+46a+Wageningen"
                  target="_blank"
                  className="block text-gray-400 hover:text-white"
                >
                  Route plannen
                </a>

              </div>

            </div>

          </div>

          <div className="border-t border-white/10 mt-10 pt-8 text-center text-gray-500">

            © {new Date().getFullYear()} Olympus 2000 Gym Wageningen

          </div>

        </div>

      </footer>
            {/* COOKIEBANNER */}

      {showCookies && (

        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 p-6 z-50">

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">

            <p className="text-gray-300 text-sm">
              Deze website gebruikt cookies voor een optimale ervaring.
            </p>

           <div className="flex gap-3">

  <button
    onClick={() => {
      localStorage.setItem('cookiesAccepted', 'true')
      setShowCookies(false)
    }}
    className="bg-red-600 px-6 py-3 rounded-xl font-bold"
  >
    Accepteren
  </button>

  <button
    onClick={() => {
      localStorage.setItem('cookiesAccepted', 'false')
      setShowCookies(false)
    }}
    className="border border-white/20 px-6 py-3 rounded-xl font-bold"
  >
    Weigeren
  </button>

</div>

          </div>

        </div>

      )}
    </main>
  )
}