'use server'

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/contas"

export async function create(formData) {
    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json"
      }
    }
    const result = await fetch(url, options)

    if(result.status !== 201){
      return {message: "Erro ao criar a conta. Verifique os campos."}
    }
    revalidatePath("/contas")
    return {ok: "Conta criada com sucesso"}

}

export async function getContas(){
  const result = await fetch(url)

  if (!result.ok){
    throw new Error("Não pode carregar as contas do servidor")
  }

  return result.json()
}

   
