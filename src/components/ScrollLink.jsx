import Link from "next/link";
export default function ScrollLink({href, children, setCurrentSection}) {
    function handleClick(event) {
        event.preventDefault();
        const elem = document.querySelector(href);
        elem?.scrollIntoView({behavior: 'smooth'});
        setCurrentSection(href.slice(1))
    }
    return (
        <Link href={href}
              onClick={handleClick}>
            {children}
        </Link>
    );
}