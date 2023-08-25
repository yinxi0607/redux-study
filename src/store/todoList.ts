import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

export type TodoItemType = {
    id: string
    title: string
    completed: boolean //是否成功
}

const INIT_STATE: TodoItemType[] = [
    {id: nanoid(5), title: '吃饭', completed: false},
    {id: nanoid(5), title: '睡觉', completed: false}
]

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: INIT_STATE,
    reducers: {
        addTodoItem(state: TodoItemType[], action: PayloadAction<TodoItemType>) {
            return [
                action.payload,
                ...state
            ]
        },
        removeTodoItem(state: TodoItemType[], action: PayloadAction<{ id: string }>) {
            const {id: removeId} = action.payload
            return state.filter(todo => todo.id!==removeId)
        },
        toggleCompleted(state: TodoItemType[], action: PayloadAction<{ id: string }>) {
            const {id: toggleId} = action.payload
            return state.map(todo => {
                const {id, completed} = todo
                if (id !== toggleId) return todo
                return {
                    ...todo,
                    completed: !completed
                }
            })

        }
    }
})

export const {addTodoItem,removeTodoItem,toggleCompleted} = todoListSlice.actions

export default todoListSlice.reducer