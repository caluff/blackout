import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
const Carousel = () => {
    return (
        <section className="bg-black/70 backdrop-blur">
            <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                            Dont just take our word for it...
                            <br className="hidden sm:block lg:hidden"/>
                            Read reviews from our customers
                        </h2>
                        <p className="mt-4 text-slate-400">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                            veritatis illo placeat harum porro optio fugit a culpa sunt id!
                        </p>
                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                            <button
                                className="prev-button rounded-full border border-sky-500 p-3 text-sky-500 hover:bg-sky-500 hover:text-white">
                                <span className="sr-only">Previous Slide</span>
                                <ChevronLeftIcon className={"w-6 h-6"}/>
                            </button>
                            <button
                                className="prev-button rounded-full border border-sky-500 p-3 text-sky-500 hover:bg-sky-500 hover:text-white">
                                <span className="sr-only">Next Slide</span>
                                <ChevronRightIcon className={"w-6 h-6"}/>
                            </button>
                        </div>
                    </div>
                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <div className="swiper-container !overflow-hidden">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-white p-6">
                                        <div
                                              className="h-96 w-64 relative block overflow-hidden rounded-xl bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat">
                                            <div className="absolute inset-0 bg-black/25"></div>
                                            <div className="mt-4 text-slate-200">
                                                <p className="text-sm">Tomada de<br/> Instagram</p>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="swiper-slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-white p-6">
                                        <div
                                            className="h-96 w-64 relative block overflow-hidden rounded-xl bg-[url('/bg2.jpg')] bg-cover bg-center bg-no-repeat">
                                            <div className="absolute inset-0 bg-black/25"></div>
                                            <div className="mt-4 text-slate-200">
                                                <p className="text-sm">Tomada de<br/> Instagram</p>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                    <button
                        aria-label="Previous slide"
                        className="prev-button rounded-full border border-sky-500 p-3 text-sky-500 hover:bg-sky-500 hover:text-white"
                    >
                        <ChevronLeftIcon className={"w-5 h-5"}/>
                    </button>
                    <button
                        aria-label="Previous slide"
                        className="prev-button rounded-full border border-sky-500 p-3 text-sky-500 hover:bg-sky-500 hover:text-white"
                    >
                        <ChevronRightIcon className={"w-5 h-5"}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Carousel