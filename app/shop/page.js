export default function Shop() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-12 text-gray-900 bg-white">
            <h1 className="text-2xl sm:text-2xl font-bold text-left mt-25 sm:mt-0">Butik</h1>

            <p className="mb-4">
               <br/> Välkommen till Stockholm 3SK:s butik! Här kan du köpa våra officiella klubbkläder – perfekta för både träning och tävling.
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>T-shirts och funktionströjor</li>
                <li>Jackor, huvtröjor och kepsar</li>
                <li>Kläder för både vuxna och barn</li>
            </ul>

            <p className="mb-6">
                Alla kläder beställs via vår samarbetspartner Netshirt. Du kan se hela sortimentet och göra din beställning genom knappen nedan.
            </p>

            <div className="mb-10">
                <a
                    href="https://www.netshirt.se/foreningsklader/stockholm-3sk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-black to-gray-400 text-white text-lg font-medium rounded-md shadow transition"
                    aria-label="Gå till Stockholm 3SK:s butik hos Netshirt (öppnas i nytt fönster)"
                >
                    Besök butiken hos Netshirt
                </a>
            </div>

            <p className="text-sm text-gray-600">
                Intäkter från försäljningen går tillbaka till klubbens verksamhet.
            </p>
        </section>
    );
}
