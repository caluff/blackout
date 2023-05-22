import { Children } from "react";
import { Fragment } from "react/cjs/react.production.min";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {useSelectedLayoutSegments} from 'next/navigation';
const Breadcrumb = ({ children }) => {
    const childrenArray = Children.toArray(children);

    const childrenWtihSeperator = childrenArray.map((child, index) => {
        if (index !== childrenArray.length - 1) {
            return (
                <Fragment key={index}>
                    {child}
                    <ChevronRightIcon className={"mx-3 overflow-visible text-slate-400 w-3 h-6"}/>
                </Fragment>
            );
        }
        return child
    });
    return (
        <nav aria-label="breadcrumb">
            <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">{childrenWtihSeperator}</ol>
        </nav>
    );
};
export default Breadcrumb;