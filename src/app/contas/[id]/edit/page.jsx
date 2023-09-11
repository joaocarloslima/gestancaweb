import { getConta } from "@/actions/contas";
import NavBar from "@/components/NavBar";
import Form from "./Form";

export default async function FormContasEdit({params}) {

    const carregarDados = async () => {
        return await getConta(params.id)
    }

    const conta = await carregarDados()
   
    return (
        <>
            <NavBar />

            <main className="bg-slate-900 p-11 mt-10 rounded-lg text-slate-200 max-w-md m-auto">
                <h2 className="text-2xl font-bold">Editar Conta</h2>

               <Form conta={conta} />
                
            </main>
        </>
    )
}