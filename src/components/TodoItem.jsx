import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
export default function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  const [done, setDone] = useState(false);
  const handleListItemClick = () => {
    setDone(!done); // Toggle the 'done' state
  };
  return (
    <div
      className={`container ${done ? "done" : ""} `}
      onClick={handleListItemClick}
    >
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
