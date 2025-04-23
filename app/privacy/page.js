import Link from "next/link";
import Image from "next/image";
import policy from "/assets/policy.png";

export default function Integrity() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 text-gray-900 bg-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Integritetspolicy</h1>

            <p className="mb-4">
                Stockholm 3SK värnar om din personliga integritet. Här beskriver vi hur vi behandlar dina
                personuppgifter inom ramen för vår verksamhet.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">Personuppgiftsansvarig</h2>
            <p className="mb-4">
                Stockholm 3SK, med organisationsnummer XXXXXX-XXXX, är personuppgiftsansvarig för
                behandling av personuppgifter.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">Varför vi behandlar personuppgifter</h2>
            <p className="mb-4">
                Vi behandlar uppgifter för att administrera medlemskap, tävlingar, träningar, utbildningar,
                kommunikation och statistik. Uppgifter kan också användas vid licenshantering och ansökningar om bidrag.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">Exempel på behandlingar</h2>
            <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Medlemsadministration</li>
                <li>Deltagande i träning och tävling</li>
                <li>Ansökan om licenser och bidrag</li>
                <li>Statistik och uppföljning</li>
                <li>Publicering på hemsida och sociala medier</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">Laglig grund</h2>
            <p className="mb-4">Exempel på rättslig grund:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Avtal (ex. medlemskap och tävlingsdeltagande)</li>
                <li>Rättslig förpliktelse (ex. bokföring, bidragsansökningar)</li>
                <li>Intresseavvägning (ex. kommunikation och publicering)</li>
                <li>Samtycke (vid särskilda tillfällen)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">Hur länge vi sparar uppgifterna</h2>
            <p className="mb-4">
                Vi gör årliga bedömningar för att rensa personuppgifter som inte längre behövs.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">Dina rättigheter</h2>
            <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Få ett registerutdrag</li>
                <li>Få felaktiga uppgifter rättade</li>
                <li>Bli raderad i vissa fall</li>
                <li>Invända mot behandling</li>
                <li>Dra tillbaka samtycke</li>
                <li>Inge klagomål till Integritetsskyddsmyndigheten (IMY)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">Kontakta oss</h2>
            <p className="mb-4">
                Har du frågor om hur vi behandlar dina personuppgifter eller vill utöva dina rättigheter?
                Kontakta oss via e-post på{" "}
                <a
                    href="mailto:info@3sk.se"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    info@3sk.se
                </a>.
            </p>
        </section>
    );
}