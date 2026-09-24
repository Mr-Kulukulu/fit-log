import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="container mx-auto my-5 rounded-2xl bg-[#222630] p-6 md:p-10">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

                {/* Hero Content */}
                <div className="grid gap-4">
                    <p className="font-semibold tracking-wider text-[#C2F800]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                        TRAIN WITH INTENT.
                        <br />
                        LOG EVERY SET.
                    </h1>

                    <p className="max-w-xl text-gray-300">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>

                    <div>
                        <a
                            href="#library"
                            className="inline-block bg-[#C2F800] px-5 py-3 font-bold text-black transition hover:scale-105"
                        >
                            BROWSE WORKOUTS
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center">
                    <Image
                        src="/banner.png"
                        alt="FitLog workout illustration"
                        width={500}
                        height={500}
                        className="h-auto w-56 md:w-80 lg:w-96"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;