"use client"

import { update } from "@/actions/contas"
import Button from "@/components/Button"
import ButtonLink from "@/components/ButtonLink"
import InputText from "@/components/InputText"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function Form({conta}) {
    const [contaEdit, setContaEdit] = useState(conta)
    const [error, setError] = useState("")

    const handleFieldChange = (field, value) => {
        setContaEdit({
            ...contaEdit,
            [field]: value
        })
    }

    const handleSubmit = async () => {
        const response = await update(contaEdit)
        if (response.message){
            setError(response.message)
            return
        }
        redirect("/contas")
    }

    return (
        <form action={handleSubmit}>
            <InputText 
                label="nome" 
                id="nome" 
                name="nome" 
                value={contaEdit.nome} 
                onChange={e => { handleFieldChange("nome", e.target.value)} }  
            />
            <InputText 
                label="icone" 
                id="icone" 
                name="icone" 
                value={contaEdit.icone}
                onChange={e => { handleFieldChange("icone", e.target.value)} } 
            />

            <div className="flex justify-around">
                <ButtonLink variante="secundary" href="/contas">cancelar</ButtonLink>
                <Button>salvar</Button>
            </div>
        </form>
    )
}