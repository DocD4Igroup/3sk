import Image from "next/image";
import logo2 from "assets/logo2.png"

export default function About() {
    return (
        <section className="bg-white text-gray-900 px-6 py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-2xl font-bold text-center mt-25 sm:mt-0">Om föreningen</h1>

                <p className="mb-6 leading-relaxed">
                   <br/> <strong>Stockholm 3SK</strong> grundades 2018 med målet att skapa en trygg, inkluderande och inspirerande miljö för sportskytte i Stockholm. Sedan starten har vi vuxit till att bli en klubb med medlemmar från hela regionen – från nybörjare till erfarna tävlingsskyttar.
                </p>

                <p className="mb-6 leading-relaxed">
                    Vi erbjuder <strong>utbildningar</strong>, <strong>träningar</strong> och <strong>tävlingar</strong> inom flera discipliner och strävar efter att främja både individuell utveckling och gemenskap. Vårt mål är att alla ska känna sig välkomna – oavsett erfarenhetsnivå.
                </p>

                <p className="mb-6 leading-relaxed">
                    Med fokus på <strong>säkerhet, ansvar och glädje</strong> bygger vi en stark klubbkultur där både unga och vuxna får möjlighet att utvecklas i sin egen takt. Vår skjutbana och våra instruktörer är certifierade och utbildade för att skapa en professionell träningsmiljö.
                </p>

                <p className="mb-6 leading-relaxed">
                    För oss är skyttet inte bara en sport – det är en gemenskap. Vi arbetar aktivt för att skapa <strong>trygga och respektfulla relationer</strong> mellan medlemmar och för att alla ska känna att de hör hemma i klubben.
                </p>

                <p className="leading-relaxed">
                    Välkommen till 3SK – där <strong>precision möter passion</strong>.
                </p>
                <Image src={logo2}
                       alt="Stockholm 3SK logotyp"
                       width={200}
                       height={200}
                       className="mx-auto mt-10"/>
            </div>
        </section>
    );
}
