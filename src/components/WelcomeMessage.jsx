import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
export default function WelcomeMessage() {
  const {todoItems}=useContext(TodoItemsContext)
  return (
    todoItems.length === 0 && (
      <div className={styles.textContainer}>
        <p className={styles.textStyle}>Enjoy Your Day</p>
        <p className={styles.textStyle}>You Dont Have Any Pending Task</p>
      </div>
    )
  );
}
