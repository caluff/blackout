import {getXataClient} from "@/xata";
import Link from "next/link";
import Image from "next/image";
import {coffee} from '../../public'

const xata = getXataClient();
const FetchPost = async ({idTitle}) => {
    const records = await xata.db.offer.getAll()
    return records.map((record) => (
        idTitle === record.category && (
            <Link href={`/category/#${record.category}`} key={record.id}
                  className={"rounded-2xl group relative block bg-black w-full h-60 lg:h-80 lg:w-64"}>
                <Image src={coffee} alt={record.name}
                       className={"rounded-2xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"}/>
                <div className={"relative p-4 sm:p-6 lg:p-8"}>
                    <p className="text-xl font-medium uppercase tracking-widest text-slate-200">
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
            </Link>
        )))
}
export default FetchPost