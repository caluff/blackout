import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {useSelectedLayoutSegments} from 'next/navigation';
import Link from "next/link";


const Breadcrumb = () => {
    const segments = useSelectedLayoutSegments()
    console.log(segments.length)
    return (
        <nav aria-label="breadcrumb">
            <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
                {segments.length === 0 ?
                    (<li className={"flex item-center text-white"}>
                        <Link href={"/"} passHref>
                            Home
                        </Link>
                    </li>)
                    :
                    segments.map((segment, index) => {
                        const isLastItem = index === segments.length - 1;

                        if (!isLastItem) {
                            return (
                                <li className={"flex item-center text-white"} key={index}>
                                    <Link href={`${segment}`} passHref>
                                        {segment}
                                    </Link>
                                    <ChevronRightIcon className={"mx-3 overflow-visible text-slate-400 w-3 h-6"}/>
                                </li>);
                        } else {
                            return (
                                <li className={"flex item-center text-white"} key={index}>
                                    <Link href={`${segment}`} passHref>
                                        {segment}
                                    </Link>
                                    <ChevronRightIcon className={"mx-3 overflow-visible text-slate-400 w-3 h-6"}/>
                                </li>
                            )
                        }

                    })
                }
            </ol>
        </nav>
    );
};
export default Breadcrumb;