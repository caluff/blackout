import Link from "next/link";

const BreadcrumbItem = ({ children, href, ...props }) => {
    return (
        <li className={"flex item-center"} {...props}>
            <Link href={href} passHref>
                {children}
            </Link>
        </li>
    );
};

export default BreadcrumbItem;