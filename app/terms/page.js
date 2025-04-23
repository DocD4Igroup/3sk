import Link from "next/link";
import Image from "next/image";
import termsImg from "/assets/terms.png"; // Ändra sökvägen till där du sparat bilden

export default function Terms() {
    return (
        <main className="min-h-screen py-20 px-6 text-gray-900 max-w-6xl mx-auto">
            <section className="grid md:grid-cols-2 gap-12 items-center">
                {/* Bild */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src={termsImg}
                        alt="Symbol för användarvillkor"
                        width={400}
                        height={400}
                        className="rounded-xl shadow-md w-full max-w-sm"
                        priority
                    />
                </div>

                {/* Text */}
                <div className="text-left">
                    <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Användarvillkor</h1>

                    <div className="space-y-6 text-base leading-relaxed">
                        <p>
                            <strong>1. Godkännande av villkor:</strong> Genom att använda denna webbplats godkänner du våra villkor.
                        </p>

                        <p>
                            <strong>2. Ändringar:</strong> Vi förbehåller oss rätten att när som helst ändra innehåll, struktur eller funktioner.
                        </p>

                        <p>
                            <strong>3. Ansvarsbegränsning:</strong> Vi strävar efter att informationen är korrekt men kan inte garantera fullständig noggrannhet.
                        </p>

                        <p>
                            <strong>4. Immateriella rättigheter:</strong> Allt innehåll på denna webbplats tillhör D4I Group och får inte användas utan tillstånd.
                        </p>

                        <p>
                            <strong>5. Otillåten användning:</strong> Du får inte använda denna webbplats på ett sätt som skadar, överbelastar eller stör den.
                        </p>

                        <p>
                            <strong>6. Kontakt:</strong> Har du frågor om våra villkor?{" "}
                            <Link href="/contact" className="text-blue-600 hover:underline">
                                Kontakta oss här
                            </Link>.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}