import { AiOutlinePlusCircle } from 'react-icons/ai'
import Logo from "../../assets/Logo.svg"

import styles from './header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo todo" />
            <form className={styles.newTaskForm}>
                <input placeholder="Adicione uma nova tarefa" />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}