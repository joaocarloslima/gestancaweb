"use server"

import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_BASE_URL + "/login"

export default async function apiLogin(credenciais){
    const options = {
        method: "POST",
        body: JSON.stringify(credenciais),
        headers: {
          "Content-Type": "application/json"
        }
    }
    const resp = await fetch(url, options)
    console.log(resp)

    if (resp.status === 403) return {error: "email e/ou senha inválidos"}

    const user = await resp.json()
    const token = user.token
    
    cookies().set("gestanca_token", token, {
        maxAge: 60 * 60 * 24 * 2 // 2 dias
    })

    return user

}

export async function apiLogout(){
    cookies().set("gestanca_token", "", {
        maxAge: 1 
    })
}