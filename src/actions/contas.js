'use server'

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/contas"

export async function create(formData) {
    const token = cookies().get("gestanca_token")
    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.value}`
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
  const token = cookies().get("gestanca_token")
  const options = {
    headers: {
      "Authorization": `Bearer ${token.value}`
    }
  }
  const result = await fetch(url, options)
  
  if (result.status !== 200){
    throw new Error(`Falha ao obter dados das contas. (${result.status})` )
  }
  
  const json = await result.json()
  return json
}

export async function destroy(id){
  const options = {
    method: "DELETE"
  }

  const deleteURL = `${url}/${id}` 

  const response = await fetch(deleteURL, options)
  
  if (!response.ok){
    const json = await response.json()
    return {error: "Falha ao apagar conta. " + json.message }
  }

  revalidatePath("/contas")
}

export async function getConta(id){
  const getUrl = `${url}/${id}`
  const response = await fetch(getUrl)
  const json = await response.json()

  if (!response.ok){
    throw new Error("Não foi possível carregar os dados da conta.")
  }

  return json
}

export async function update(conta){
  const updateUrl = `${url}/${conta.id}`

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(conta)
  }

  const result = fetch (updateUrl, options)

  if (!result.status == 200){
    return { message: "Erro ao atualizar a conta" }
  }

  revalidatePath("/contas")
  return {ok: "Conta criada com sucesso"}
}

   
