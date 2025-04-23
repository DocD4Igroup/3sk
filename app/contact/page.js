export default function Contact() {
    return (
        <section
            className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-gray-900"
            aria-labelledby="contact-heading"
        >
            <h2 id="contact-heading" className="text-2xl sm:text-2xl font-bold text-center mt-25 sm:mt-0" tabIndex="-1">
                Kontakt
            </h2>

            <div className="grid grid-cols-1  gap-12 text-base">
                {/* Vänster kolumn */}
                <div className="space-y-6 pt-4 border-t">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-600 uppercase">Hemmaarena</h3>
                        <p>Botkyrka Skyttecenter</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-600 uppercase">Besöksadress</h3>
                        <p>
                            Pålamalmsvägen 49<br />
                            146 33 Tullinge<br />
                            <a
                                href="https://www.google.com/maps/place/P%C3%A5lamalmsv%C3%A4gen+49,+146+33+Tullinge/@59.1747951,17.92946,17z/data=!3m1!4b1!4m6!3m5!1s0x465f71a539dd407d:0x237a048c5399b25e!8m2!3d59.1747951!4d17.9320349!16s%2Fg%2F11p5z32lq6?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                Visa karta
                            </a>
                        </p>
                    </div>

                </div>

                    <div className="pt-4 border-t">
                        <h3 className="text-lg font-semibold">Kontakta styrelsen</h3>
                        <p>
                            Du kan kontakta styrelsen via mail på:
                            {" "}
                            <a
                                href="mailto:info@3sk.se"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                info@3sk.se
                            </a>
                        </p>
                    </div>
                </div>
        </section>
    );
}
