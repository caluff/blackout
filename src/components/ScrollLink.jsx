import Link from "next/link";
export default function ScrollLink({href, children}) {
    function handleClick(event) {
        event.preventDefault();
        const elem = document.querySelector(href);
        elem?.scrollIntoView({behavior: 'smooth'});

    }
    return (
        <Link href={href}
              onClick={handleClick}>
            {children}
        </Link>
    );
}