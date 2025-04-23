import Image from "next/image";

export default function Home() {
  return (
      <main
          className="min-h-screen bg-gradient-to-b  to-white text-gray-900 px-4 sm:px-6 lg:px-8 py-12"
          aria-labelledby="welcome-heading"
      >
          <section className="max-w-4xl mx-auto">
              <h1 className="text-2xl sm:text-2xl font-bold text-center mt-25 sm:mt-0">
                  Välkommen till Stockholm 3SK
              </h1>

              <div className="space-y-6 text-lg leading-relaxed text-center sm:text-left">
                  <p> <br/>
                      Vi är en engagerad skytteklubb för dig som brinner för sportskytte – oavsett om du är
                      nybörjare, erfaren skytt eller bara nyfiken på att börja.
                  </p>
                  <p>
                      Hos oss hittar du en gemenskap där säkerhet, ansvar och glädje står i fokus. Vi erbjuder
                      utbildningar, tävlingar och tillgång till moderna skjutbanor.
                  </p>
                  <p>
                      Bli en del av Stockholm 3SK och utveckla dina färdigheter i en stödjande och inkluderande
                      miljö. Alla är välkomna – från nybörjare till tävlingsskyttar.
                  </p>

                  <p>
                      Utforska våra utbildningar, tävlingar och skjutbanor – och bli en del av vår växande
                      klubb. Tillsammans utvecklar vi färdigheter, delar erfarenheter och bygger framtidens
                      skyttar.
                  </p>
                  <p>
                      Välkommen att kontakta oss eller besöka vår anläggning för att uppleva gemenskap och
                      precision i varje skott.
                  </p>
                  <p>
                      Har du frågor? <a href="/contact" className="text-blue-600 underline hover:text-blue-800">Kontakta oss</a> eller kom förbi vår anläggning.
                  </p>
              </div>
          </section>
      </main>
  );
}