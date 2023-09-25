import { CreditCardIcon } from "@heroicons/react/24/solid";
import { Monomaniac_One } from 'next/font/google'

const monomaniac = Monomaniac_One({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
  })

export default function CardStats({conta}){
    const saldo = conta.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2})
    const receitas = conta.receitas.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2})
    const despesas = conta.despesas.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2})
    return (
         <div className="flex flex-col gap-4 bg-slate-900 rounded max-w-xs p-2 snap-start">
            <div className="flex items-center gap-4">
                <CreditCardIcon className="text-slate-400 h-8 w-8" />
                <span className="text-lg">{conta.nome}</span>
            </div>
            <span className={monomaniac.className + " text-5xl "}>R$ {saldo}</span>
            <div className="flex justify-between">
                <span className="text-emerald-400">R$ {receitas}</span>
                <span className="text-rose-600">R$ {despesas}</span>
            </div>
         </div>
    )
}