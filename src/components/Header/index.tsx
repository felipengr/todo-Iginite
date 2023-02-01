import { FormEvent, useState, ChangeEvent } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Logo from "../../assets/Logo.svg"

import styles from './header.module.css'

interface Props {
    onAddTask: (tastTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo todo" />
            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    onChange={onChangeTitle}
                    value={title}
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}