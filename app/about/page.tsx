"use client";

import Image from "next/image";

export default function servicePage() {



    return (
        <main className="w-full px-5 bg-white">

            {/* HERO */}
            <section className="mb-8">
                <div className="relative h-[160px] sm:h-[280px] md:h-[350px] rounded-3xl overflow-hidden">
                    <Image
                        src="/about.jpg"
                        alt="Gallery"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium">
                            Gallery
                        </h1>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="mb-10">
                <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
                    Everything is possible with just one phone call
                </h2>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-7xl">
                    An event at the Chatta Events allows you to have peace of mind. Working with our professional and knowledgeable staff, you can rest easy knowing that we will handle every detail with care. Not only will you experience our genuine Southern hospitality, but the refreshing simplicity that comes from our "one-stop shop" approach.
                </p>
            </section>




        </main>
    );
}
