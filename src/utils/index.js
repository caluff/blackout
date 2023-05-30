'use client'
import {motion} from "framer-motion";

const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {duration: 1},
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
const LiOffer = ({category, isActive, isActiveS, isNotActiveS, metToggle, index}) => {
    return (
        <motion.li
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: index * 1.5}}
        >
            <div className={isActive ? isActiveS : isNotActiveS}
                 onClick={() => metToggle()}
            >
                {category.title}
            </div>
        </motion.li>
    )
}

export {Bienvenido, LiOffer,}

