import Image from "next/image";
import shootingRangeImg from "assets/skyttecenter.jpeg";

export default function ShootingRange() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <section
                className="max-w-7xl mx-auto py-50 px-6 grid md:grid-cols-2 gap-10 items-center bg-gray-50 rounded-lg shadow-sm lg:ml-10"
                aria-labelledby="shooting-heading"
            >
                <div className="max-w-4xl">
                    <h2 id="shooting-heading" className="text-2xl sm:text-2xl font-bold text-center mt-12 sm:mt-0">
                        Skjutbana & Träning
                    </h2>
                    <p className="text-base text-gray-800 mb-4 mt-4">
                        Vår skjutbana är utrustad med elektroniska målsystem och erbjuder trygga, moderna
                        förhållanden för både träning och tävling.
                    </p>
                    <p className="text-base text-gray-800">
                        Alla är välkomna – från nybörjare till elit.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image
                        src={shootingRangeImg}
                        alt="Skjutbana med måltavlor"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-md object-cover"
                        priority
                    />
                </div>
            </section>
        </main>
    );
}
