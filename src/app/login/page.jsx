"use client"

import Image from "next/image";
import loginimage from "@/images/login.png"
import InputText from "@/components/InputText";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function Login(){
    const {register, handleSubmit} = useForm()
    const {login} = useContext(AuthContext)

    const onSubmit = async data => {
        const resp = await login(data)
        if (resp?.error) toast.error(resp.error)
    }

    return (
        <div className="h-screen flex">
            <aside className="hidden lg:flex">
                <Image className="h-auto w-auto" src={loginimage} alt="imagem de um cartão realizando pagamento" />
            </aside>
            <main className="flex flex-col justify-center items-center h-screen w-full gap-2">
                <h2 className="text-5xl font-bold">Gestança</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <InputText register={register} label="email" name="email" />
                    <InputText register={register} label="senha" name="senha" type="password" />
                    <Button>entrar</Button>
                </form>
            </main>
        </div>
    )
}