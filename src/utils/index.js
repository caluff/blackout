'use client'
import {motion} from "framer-motion";
import Link from "next/link";

const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition:{duration:1},
    }

}
const Bienvenido = () => {
    return (
        <motion.h1
            className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center tracking-tight"
            initial={'hidden'}
            animate={'visible'}
            variants={variants}
        >
            Bienvenidos al Blackout
        </motion.h1>
    )
}
const LiOffer = ({category, isActive, isNotActive, metToggle, index}) => {
    return (
        <motion.li aria-label="Sidebar navigation"
                   initial={{opacity: 0}}
                   animate={{opacity: 1}}
                   transition={{duration:index*1.5}}
        >
            <Link href={category.route}
                  className={category.current ? isActive : isNotActive}
                  onClick={() => metToggle()}
            >
                {category.title}
            </Link>
        </motion.li>
    )
}
export {Bienvenido, LiOffer,}

