import { PlusCircle} from '@phosphor-icons/react'
import styles from './NewTask.module.css'


export function NewTask(){
    return (
        <form className={styles.newTask}>
            <input  />
            <button type='submit'>
                <span>Criar</span>
                <PlusCircle size={16}/>
            </button>
        </form>
    )
}