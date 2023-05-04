'use client';
import {motion} from "framer-motion";

export default function Home() {
    return (
        <div className={"grid place-content-center m-56"}>
            <motion.div
                className={"w-36 h-36 rounded-3xl bg-white"}
                initial={{scale: 1}}
                transition={{duration: 2}}
                animate={{scale: 2, rotate: 360}}
            >
            </motion.div>
        </div>
    )
}
