import Image from "next/image";
import logo from "../../public/descarga.png";
import {Bars3Icon, ChevronRightIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";

const Navbar = ({setToggleSidebar,toggleSidebar}) => {
  return (
      <div className={"sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500" +
          "lg:z-50 lg:border-b border-slate-50/[0.06] " +
          "bg-transparent"}>
          <div className={"max-w-7xl mx-auto"}>
              <div className={" py-4 border-b lg:px-8 lg:border-0 border-slate-300/10 mx-4 lg:mx-0"}>
                  <div className={"relative flex items-center"}>
                      <a className={"mr-3 flex w-[2.0625rem] overflow-hidden md:w-auto"} href={"/"}>
                          <Image className={"w-auto h-8"} src={logo} alt={"logo de Blackout"}></Image>
                          <div className={"relative py-1 px-3 flex"}>
                                <span className={"hidden lg:block text-white text-xs"}>
                                    Blackout
                                </span>
                          </div>
                      </a>
                      <button type={"button"}
                              className={"ml-auto text-slate-400 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-300 lg:hidden"}>
                          <span className={"sr-only"}>Search</span>
                          <MagnifyingGlassIcon width={24} height={24}/>
                      </button>
                  </div>
              </div>

              <div className={"flex items-center p-4 border-b border-slate-50/[0.06] lg:hidden"}>
                  <button type={"button"} className={"text-slate-400 hover:text-slate-300"}>
                      <span className={"sr-only"}>Navigation</span>
                      <Bars3Icon width={24} height={24} onClick={()=> setToggleSidebar(true)}/>
                  </button>
                  <ol className={"ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0"}>
                      <li className={"flex item-center"}>
                          <span className={"text-slate-400"}>Home</span>
                          <ChevronRightIcon className={"mx-3 overflow-visible text-slate-400 w-3 h-6"}/>
                      </li>
                      <li className={"font-semibold truncate text-slate-200"}>
                          asdasdasdasdasd
                      </li>
                  </ol>
              </div>

          </div>
      </div>
  )
}
export default Navbar