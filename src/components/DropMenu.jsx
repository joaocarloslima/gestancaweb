"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { destroy } from '@/actions/contas';
import toast from 'react-hot-toast';

import { useRouter } from 'next/navigation'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function DropMenu({conta}) {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleDelete = async () => {
    const response = await destroy(conta.id);

    if (response?.error){
      toast.error(response.error, {style: {backgroundColor: '#475569', color: '#f1f5f9'}})
    }else{
      toast.success("conta apagada com sucesso", {style: {backgroundColor: '#475569', color: '#f1f5f9'}})
    }
    setAnchorEl(null);
  }

  const handleEdit = () => {
    router.push(`/contas/${conta.id}/edit`)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ChevronDownIcon className="h-6 w-6 text-slate-200" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleEdit}>editar</MenuItem>

        <AlertDialog>
          <AlertDialogTrigger>
            <MenuItem>apagar</MenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza que quer apagar essa conta?</AlertDialogTitle>
              <AlertDialogDescription>
                Essa ação não pode ser desfeita. Todos os dados da conta serão perdidos.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                  Apagar mesmo assim
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        
      </Menu>
    </div>
  );
}
