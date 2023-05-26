import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {useSelectedLayoutSegments} from 'next/navigation';
import Link from "next/link";


const Breadcrumb = () => {
    const segments = useSelectedLayoutSegments()
    return (
        <nav aria-label="breadcrumb">
            <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
                {segments.map((segment, index) => (
                    <li className={"flex item-center text-white"} key={index}>
                        <Link href={`${segment}`} passHref>
                            {segment}
                        </Link>
                        <ChevronRightIcon className={"mx-3 overflow-visible text-slate-400 w-3 h-6"}/>
                    </li>
                ))}
            </ol>
        </nav>
    );
};
export default Breadcrumb;