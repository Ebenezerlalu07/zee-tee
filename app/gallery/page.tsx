"use client";

import Image from "next/image";

export default function ContactPage() {

    const galleryImages = [
        "/gallery/1.jpg",
        "/gallery/2.jpg",
        "/gallery/3.jpg",
        "/gallery/4.jpg",
        "/gallery/5.jpg",
        "/gallery/6.jpg",
        "/gallery/7.jpg",
        "/gallery/8.jpg",
        "/gallery/9.jpg",
        "/gallery/10.jpg",
        "/gallery/11.jpg",
        "/gallery/12.jpg",
        "/gallery/13.jpg",
        "/gallery/14.jpg",
        "/gallery/15.jpg",
        "/gallery/16.jpg",
    ];

    return (
        <main className="w-full px-5 bg-white">

            {/* HERO */}
            <section className="mb-8">
                <div className="relative h-[160px] sm:h-[280px] md:h-[350px] rounded-3xl overflow-hidden">
                    <Image
                        src="/Gallery..jpg"
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
                    Unforgettable Moments
                </h2>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl">
                    A curated collection of beautiful celebrations and unforgettable moments.
                </p>
            </section>

            {/* UNIFORM GALLERY GRID */}
            <section className="pb-16">
                <div
                    className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-4
          "
                >
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-[4/3] overflow-hidden rounded-xl group"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition duration-300" />
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
