import FetchPost from "@/components/FetchPost";
import {Suspense} from "react";
import Loading from "@/app/offer/loading";
import {categoriesFetch} from "@/constants";

async function Offer() {
    return (
        <div className={"flex flex-col text-slate-200"}>
            {categoriesFetch.map(([id, title]) => (
                <section id={id} key={id} className={"relative z-20 border-b border-slate-50/10"}>
                    <div className={"flex items-center"}>
                        <h1 className={"text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-400 my-4"}>
                            {title}
                        </h1>
                    </div>
                    <Suspense fallback={<Loading/>}>
                        <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4"}>
                            <FetchPost idTitle={id}/>
                        </div>
                    </Suspense>
                </section>
            ))}
        </div>
    )
}

export default Offer