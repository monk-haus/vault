"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PlatformPage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <main className="min-h-screen bg-[#f4f1ea] dark:bg-[#0a0a0a] pt-32 pb-20">

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 md:mb-32 text-center">
                <h1 className="font-serif text-6xl md:text-8xl text-black dark:text-white leading-[0.9]">
                    The Platform.
                </h1>
            </div>

            <section className="w-full mb-32">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">

                    <div className="relative h-[400px] lg:h-auto bg-[#e8e6df] dark:bg-[#151515] border-r border-black/10 dark:border-white/10 p-8 flex items-center justify-center overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.05]"
                            style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        </div>

                        <div className="relative w-[80%] aspect-[4/3] shadow-lg rotate-1 group-hover:rotate-0 transition-transform duration-700">
                            <Image
                                src="/assets/images/platform/dashboard.webp"
                                alt="Operational Command"
                                fill
                                className="object-cover grayscale"
                            />
                        </div>
                    </div>

                    <div className="bg-[#f0ede6] dark:bg-[#111] p-12 md:p-20 flex flex-col justify-center">
                        <div className="mb-10">
                            <h2 className="font-serif text-4xl md:text-5xl text-black dark:text-white mb-6">
                                Operational Command.
                            </h2>
                            <p className="font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                VAULT Retail is built to eliminate the friction between intent and execution. It serves as the single source of truth for the store floor, unifying data from legacy systems into clear, measurable workflows.
                            </p>
                        </div>

                        <div className="space-y-8 border-t border-black/10 dark:border-white/10 pt-8">

                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
                                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 w-32 shrink-0 mt-1">
                                    Integration
                                </span>
                                <p className="font-serif text-lg italic text-black dark:text-white leading-snug">
                                    Composes data from disparate systems without context switching.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
                                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 w-32 shrink-0 mt-1">
                                    Telemetry
                                </span>
                                <p className="font-serif text-lg italic text-black dark:text-white leading-snug">
                                    Captures interaction data to monitor operational compliance and adoption.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            <section className="w-full">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">

                    <div className="order-2 lg:order-1 bg-white dark:bg-[#050505] p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">

                        <div className="relative z-10 mb-10">
                            <h2 className="font-serif text-4xl md:text-5xl text-black dark:text-white mb-6">
                                The Private Folio.
                            </h2>
                            <p className="font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                VAULT is the digital extension of the physical salon. It moves beyond transaction into continuity, giving the client a dedicated, branded surface to manage their relationship with the House. It is a persistent concierge that turns "shopping" into "service."
                            </p>
                        </div>

                        <div className="relative z-10 space-y-8 border-t border-black/5 dark:border-white/5 pt-8">

                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
                                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 w-32 shrink-0 mt-1">
                                    Curated Relevance
                                </span>
                                <p className="font-serif text-lg italic text-black dark:text-white leading-snug">
                                    Clients receive edits tailored to specific life moments—trips, galas, or seasonal shifts—delivered as a finished thought, not a feed.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
                                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 w-32 shrink-0 mt-1">
                                    Frictionless Service
                                </span>
                                <p className="font-serif text-lg italic text-black dark:text-white leading-snug">
                                    A direct line for the logistics of luxury. Holds, fittings, and alterations are handled with the speed of software and the touch of a concierge.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative h-[400px] lg:h-auto bg-[#f4f1ea] dark:bg-[#111] p-0 flex items-center justify-center overflow-hidden">
                        <Image
                            src="/assets/images/platform/curation.webp"
                            alt="The Private Folio"
                            fill
                            className="object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                        />

                        <div className="absolute inset-0 bg-black/10 dark:bg-black/40 pointer-events-none"></div>
                    </div>

                </div>
            </section>

        </main>
    );
}