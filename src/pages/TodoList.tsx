import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../store";
import {addTodoItem, removeTodoItem, TodoItemType, toggleCompleted} from "../store/todoList.ts";
import {nanoid} from "nanoid";

const TodoList: FC = () => {
    const todoList = useSelector<StateType>(state => state.todoList) as TodoItemType[]
    const dispathch = useDispatch()
    function del(id: string){
        dispathch(removeTodoItem({id}))
    }
    function  toggle(id: string){
        dispathch(toggleCompleted({id}))
    }
    function add(){
        const id = nanoid(5)
        const newTodo = {
            id,
            title: `todo-${id}`,
            completed: false
        }
        dispathch(addTodoItem(newTodo))
    }
    return (
        <div>
            <span>TodoList</span>
            <button onClick={add}>ADD ITEM</button>
            <ul>
                {todoList.map(todo => {
                    const {id, title, completed} = todo
                    return <li key={id}
                                 style={{textDecoration: completed ? 'line-through' : 'none'}}
                    >
                        <span onClick={()=> toggle(id)}>{title}</span>
                        <button onClick={()=> del(id)}>删除</button>

                    </li>
                })}
            </ul>
        </div>
    )
}

export default TodoList