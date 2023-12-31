"use client";

import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as todosApi from '@/todos/helpers/todos';
import { useRouter } from "next/navigation";
import prisma from "@/lib/prisma";
import { addTodo, deleteTodos } from "../actions/todo-actions";

export const NewTodo = () => {
  const [description, setDescription] = useState("");
  const router = useRouter();

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodo(description);
    setDescription('')
  };

  const deleteCompleted = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // await todosApi.deleteTodo();
    await deleteTodos()
    router.refresh();
  };

  return (
    <form className="flex w-full"  onSubmit={onSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={ (e) => deleteCompleted(e) }
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
