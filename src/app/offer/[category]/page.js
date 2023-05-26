import {getXataClient} from "@/xata";
import Image from "next/image";
import {coffee} from "../../../../public";

const xata = getXataClient();
export default async function Category({params}) {

    const {category} = params;
    const cats = await xata.db.offer
        .filter({category: category})
        .getMany();
    return (
        <section className={"relative z-20 border-b border-slate-50/10"}>
            <div className={"flex items-center"}>
                <h1 className={"text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-400 my-4"}>
                    {category}
                </h1>
            </div>
            <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4"}>
                {cats.map((record) => (
                    <div key={record.id}
                         className={"rounded-2xl group relative block bg-black lg:h-80 h-60 cursor-pointer"}>
                        <Image src={coffee} alt={record.name}
                               className={"rounded-2xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"}/>
                        <div className={"relative p-4 sm:p-6 lg:p-8"}>
                            <p className="text-xl font-medium uppercase tracking-widest text-slate-200 sm:text-sm">
                                {record.name}
                            </p>
                            <p className="text-sm text-indigo-300 sm:text-xl">{`$${record.price}.00`}</p>
                            <div className="mt-24 sm:mt-40 lg:mt-40">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">
                                        {record.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}