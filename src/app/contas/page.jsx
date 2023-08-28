import NavBar from "@/components/NavBar";
import Conta from "./Conta";

async function getContas(){
  const url = "http://localhost:8080/api/contas"
  const result = await fetch(url)

  return result.json()
}

export default async function Contas() {
  const data = await getContas()
  console.log("data", data)
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
          {data.map( (conta) => {
            return <Conta conta={conta} />
          } )}
          
        </div>

      </main>
    </>
  )
}
