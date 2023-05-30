import Link from "next/link";
import {useEffect} from "react";
export default function ScrollLink({href, children, setCurrentSection}) {
    function handleClick(event) {
        event.preventDefault();
        const elem = document.querySelector(href);
        elem?.scrollIntoView({behavior: 'smooth'});
        setCurrentSection(href.slice(1))
    }
    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting){
                        setCurrentSection(entry.target.id)
                    }
                })
            },
            {threshold:0.5}
        )
        document.querySelectorAll('section').forEach((elem)=>{
            observer.observe(elem)
        })
        return()=>observer.disconnect()
    },[])

    return (
        <Link href={href}
              onClick={handleClick}>
            {children}
        </Link>
    );
}