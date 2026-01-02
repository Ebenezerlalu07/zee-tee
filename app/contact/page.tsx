"use client";

import Image from "next/image";

export default function ContactPage() {

    const handleOpenEmail = () => {
        const name = (document.getElementById("name") as HTMLInputElement)?.value;
        const email = (document.getElementById("email") as HTMLInputElement)?.value;
        const message = (document.getElementById("message") as HTMLTextAreaElement)?.value;

        if (!email || !message) {
            alert("Please fill in Email and Message");
            return;
        }

        const mailtoLink =
            `mailto:ebenezerlalu07@gmail.com` +
            `?subject=${encodeURIComponent(`Contact Request from ${name || "Website User"}`)}` +
            `&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;

        //  This opens Gmail / default mail app
        window.location.href = mailtoLink;
    };


    return (
        <main className=" w-full px-5">

            {/* HERO IMAGE */}
            <section>
                <div className="animate-fade-in  relative overflow-hidden rounded-3xl h-[150px] sm:h-[350px] md:h-[300px]">
                    <Image
                        src="/Contact.jpg"
                        alt="Contact Chatta Events"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </section>

            {/* INFO STRIP */}
            <section className="animate-fade-in w-full border-t border-b bg-white">
                <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

                    {/* LEFT TEXT */}
                    <p className="text-black text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl">
                        Get in touch and we&apos;ll get back to you promptly and personally as soon as we can.
                        <br className="hidden sm:block" />
                        We genuinely look forward to hearing from you!
                    </p>

                    {/* RIGHT SOCIAL ICONS */}
                    <div className="flex items-center gap-6 text-black">

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:opacity-70 hover:text-[#D53F52] transition"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37a4 4 0 1 1-7.88 1.26 4 4 0 0 1 7.88-1.26z" />
                                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:opacity-70 hover:text-[#D53F52] transition"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z" />
                            </svg>
                        </a>

                        {/* X */}
                        <a
                            href="https://x.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X"
                            className="hover:opacity-70 hover:text-[#D53F52] transition text-2xl font-semibold leading-none"
                        >
                            X
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:opacity-70 hover:text-[#D53F52] transition"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5zM3 8.98h4v12H3zM9 8.98h3.8v1.6h.1c.5-.9 1.7-1.8 3.6-1.8 3.8 0 4.5 2.5 4.5 5.7v6.5h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.9H9z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </section>


            {/* CONTACT FORM */}
            <section className="animate-fade-in w-full bg-white py-5">
                <div className="mx-auto max-w-7xl px-6">

                    {/* HEADER */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-medium text-black">
                            Have a question or need assistance?
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                            Questions, comments, or suggestions? Simply fill in the form and
                            we&apos;ll be in touch shortly.
                        </p>
                    </div>

                    {/* CONTENT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-stretch">

                        {/* LEFT : FORM */}
                        <div className="h-full flex flex-col">
                            <h3 className="text-2xl font-semibold mb-6">Get in Contact!</h3>

                            <form
                                className="space-y-6 flex flex-col justify-between h-full"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") e.preventDefault();
                                }}
                            >
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Name</label>
                                        <input
                                            id="name"
                                            className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent text-black"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">
                                            Email<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent text-black"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent resize-none text-black"
                                        />
                                    </div>
                                </div>

                                {/* BUTTON */}
                                <button
                                    type="button"
                                    onClick={handleOpenEmail}
                                    className="mt-6 w-full rounded-full bg-black py-3 text-white text-base font-medium hover:opacity-90 transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* RIGHT : MAP */}
                        <div className="h-full min-h-[440px] rounded-3xl overflow-hidden">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps?q=Sienna%20Plantation%20Texas&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                            />
                        </div>

                    </div>
                </div>
            </section><br></br><br></br>

        </main>
    );
}
