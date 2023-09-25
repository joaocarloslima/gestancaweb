import { getContas } from "@/actions/contas";
import CardStats from "@/components/CardStats";
import NavBar from "@/components/NavBar";
import { CreditCardIcon } from '@heroicons/react/24/solid'

export default async function Home() {
  const contas = await getContas()

  return (
    <>
      <NavBar active={"contas"} />

      <main>
        <div className="grid p-5 max-w-4xl m-auto">
          <div className="grid auto-cols-max grid-flow-col gap-4 overflow-x-scroll snap-x">
            {contas.map(conta => <CardStats key={conta.id} conta={conta} />)}
          </div>

          {/* metas */}

          {/* ultimas despesas */}

        </div>
      </main>
    </>
  )
}
