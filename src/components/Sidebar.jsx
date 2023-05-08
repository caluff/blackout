import {MagnifyingGlassIcon, HomeIcon, QueueListIcon, XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {useState} from "react";


const Nav = ({setVisibleOffer, visibleOffer}) => {
    return (
        <nav id={"nav"} className={"lg:text-sm lg:leading-6 relative"}>
            <div className={"sticky top-0 -ml-0.5 pointer-events-none hidden lg:block"}>
                <div className={"h-10 bg-slate-900"}></div>
                <div className={"bg-slate-900 relative pointer-events-auto ml-1"}>
                    <button type={"button"}
                            className={"text-slate-400 hidden w-full lg:flex items-center text-sm leading-6 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 bg-slate-800 hover:bg-slate-700"}>
                        <MagnifyingGlassIcon width={24} height={24} className={"mr-3 flex-none"}/>
                        Quick search...
                    </button>
                </div>
                <div className={"h-8 bg-gradient-to-b from-slate-900"}></div>
            </div>
            <ul>
                <li>
                    <Link href={"/"}
                          className={"group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-400"}>
                        <div
                            onClick={()=>setVisibleOffer(false)}
                            className={"mr-4 rounded-md ring-0 ring-slate-900/5 shadow-none group-hover:shadow-none group-hover:ring-slate-900/10 group-hover:bg-sky-500 bg-slate-700"}>
                            <HomeIcon width={24} height={24}/>
                        </div>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/category"}
                          className={"group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-indigo-400"}
                          onClick={() => setVisibleOffer(true)}>
                        <div
                            className={"mr-4 rounded-md ring-0 ring-slate-900/5 shadow-none group-hover:shadow-none group-hover:ring-slate-900/10 group-hover:bg-indigo-500 bg-slate-800"}>
                            <QueueListIcon width={24} height={24}/>
                        </div>
                        Offer
                    </Link>
                </li>
                {visibleOffer && (
                    <li className={"mt-12 lg:mt-8"}>
                        <h5 className={"mb-8 lg:mb-3 font-semibold text-slate-200"}>
                            Category
                        </h5>
                        <ul className={"space-y-6 lg:space-y-2 border-l border-slate-800"}>
                            <li>
                                <Link href={"#"}
                                      className={"block border-l pl-4 -ml-px text-indigo-400 border-current font-semibold"}>
                                    primera categoria
                                </Link>
                            </li>

                            <li>
                                <Link href={"#"}
                                      className={"block border-l pl-4 -ml-px  border-transparent hover:border-slate-500 text-slate-400 hover:text-slate-300"}>
                                    segunda categoria
                                </Link>
                            </li>
                        </ul>
                    </li>
                )}

            </ul>
        </nav>
    )
}

const Sidebar = ({toggleSidebar, setToggleSidebar}) => {
    const [visibleOffer, setVisibleOffer] = useState(false);
    return (
        <>
            {toggleSidebar && (
                <div className={"fixed z-50 inset-0 overflow-y-auto lg:hidden"}>
                    <div className={"fixed inset-0 bg-slate-900/80 backdrop-blur-sm"}></div>
                    <div className={"relative bg-slate-800 p-6 w-80 max-w-[calc(100%-3rem)]"}>
                        <button type={"button"}
                                className={"absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center hover:text-slate-300 text-slate-400"}>
                            <span className={"sr-only"}>Close Navigation</span>
                            <XMarkIcon width={24} height={24} onClick={() => setToggleSidebar(false)}/>
                        </button>
                        <Nav visibleOffer={visibleOffer} setVisibleOffer={setVisibleOffer}/>
                    </div>
                </div>
            )}
            <div
                className={"hidden h-full lg:block fixed z-20  top-[3.8125rem] left-[max(opx,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 pr-8 overflow-y-auto"}>
                <Nav visibleOffer={visibleOffer} setVisibleOffer={setVisibleOffer}/>
            </div>
        </>
    )
}
export default Sidebar;