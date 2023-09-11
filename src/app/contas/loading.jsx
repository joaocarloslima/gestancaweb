import NavBar from "@/components/NavBar";
import Conta from "./Conta";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    const conta = {}
    const data = Array(3).fill(conta)
    return (
        <>
            <NavBar active={"contas"} />

            <main className="bg-slate-900 p-11 m-10 rounded-lg text-slate-200">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Contas</h2>

                    <a href="/contas/new" className="bg-pink-600 py-2 px-4 rounded hover:bg-pink-800">
                        criar conta
                    </a>

                </div>

                <div id="data">
                    {data.map((conta) => 
                         
                            <div id="data-row" className="flex items-center justify-between p-2 my-1 rounded cursor-pointer hover:bg-slate-800">
                                <div className="flex gap-1">
                                    <Skeleton className="h-6 w-6 rounded-full bg-slate-600 " />
                                    <Skeleton className="w-32 h-6 bg-slate-600 rounded-lg" />
                                </div>
                                <div className='flex items-center'>
                                    <Skeleton className="w-10 h-6 bg-slate-600 rounded-lg" />
                                </div>
                            </div>
                        
                    )}

                </div>

            </main>
        </>
    )

}