'use client'
 
import Button from '@/components/Button'
import ButtonLink from '@/components/ButtonLink'
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Opa! Um erro aconteceu</h2>
      <p>{error.message}</p>
      <ButtonLink href="/" variante='secundary'>voltar para home</ButtonLink>
      <Button
        onClick={
          () => reset()
        }
      >
        Tentar novamente
      </Button>
    </div>
  )
}