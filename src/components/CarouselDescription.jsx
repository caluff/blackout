'use client'
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {bg1, bg2} from "../../public";
import {useState} from "react";
import Swipe from "react-easy-swipe";
import Image from "next/image";
import Link from "next/link";

const images = [bg1,bg2];
const CarouselDescription = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleNextSlide = () => {
        let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };
    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    return (
        <section className="bg-black/70 backdrop-blur">
            <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:me-0 lg:pe-0 lg:ps-8">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                            Descripcion del blackout...
                            <br className="hidden sm:block lg:hidden"/>
                            bla bla bla bla bla bla bla bla
                        </h2>
                        <p className="mt-4 text-slate-400">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                            veritatis illo placeat harum porro optio fugit a culpa sunt id!
                        </p>
                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                            <button
                                className="prev-button rounded-full border border-sky-500 p-3 text-sky-500 hover:bg-sky-500 hover:text-white">
                                <span className="sr-only">Previous Slide</span>
                                <ChevronLeftIcon
                                    onClick={handlePrevSlide}
                                    className={"w-6 h-6"}/>
                            </button>
                            <button
                                className="prev-button rounded-full border border-sky-500 p-3 text-sky-500 hover:bg-sky-500 hover:text-white">
                                <span className="sr-only">Next Slide</span>
                                <ChevronRightIcon
                                    onClick={handleNextSlide}
                                    className={"w-6 h-6"}/>
                            </button>
                        </div>
                    </div>
                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <Swipe
                            onSwipeLeft={handleNextSlide}
                            onSwipeRight={handlePrevSlide}
                            className="relative z-10 w-full h-full "
                        >
                            {images.map((image, index) => {
                                if (index === currentSlide) {
                                    console.log(image)
                                    return (
                                        <Link key={index} href={""}
                                             className="flex h-full flex-col justify-between bg-transparent p-6">
                                            <Image src={image} alt={""} className={"rounded-2xl"}/>

                                        </Link>
                                    );
                                }
                            })}
                        </Swipe>
                    </div>
                </div>
                <div className="relative flex sm:justify-center p-2 ">
                    {images.map((_, index) => {
                        return (
                            <div
                                className={
                                    index === currentSlide
                                        ? "h-4 w-4 bg-sky-500 rounded-full mx-2 mb-2 cursor-pointer"
                                        : "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                                }
                                key={index}
                                onClick={() => {
                                    setCurrentSlide(index);
                                }}
                            />
                        );
                    })}
                </div>
                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                    <button
                        aria-label="Previous slide"
                        className="prev-button rounded-full border border-sky-500 p-3 text-sky-500 hover:bg-sky-500 hover:text-white"
                    >
                        <ChevronLeftIcon
                            onClick={handlePrevSlide}
                            className={"w-5 h-5"}/>
                    </button>
                    <button
                        aria-label="Previous slide"
                        className="prev-button rounded-full border border-sky-500 p-3 text-sky-500 hover:bg-sky-500 hover:text-white"
                    >
                        <ChevronRightIcon
                            onClick={handleNextSlide}
                            className={"w-5 h-5"}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CarouselDescription