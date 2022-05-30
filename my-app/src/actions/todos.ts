import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes, DeleteTodosAction, FetchTodosAction, Todo} from "./types";

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
    return async (dispatch: Dispatch<FetchTodosAction>) => {
        const response = await axios.get<Todo[]>(url)

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchDodos,
            payload: response.data
        })
    }


}

export const deleteTodo = (id: number): DeleteTodosAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }
}
