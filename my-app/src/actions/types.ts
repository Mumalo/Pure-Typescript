export enum ActionTypes {
    fetchDodos,
    deleteTodo
}

export interface Todo {
    id: number
    title: string
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.fetchDodos;
    payload: Todo[]
}

export interface DeleteTodosAction {
    type: ActionTypes.deleteTodo;
    payload: number
}

export type Action = FetchTodosAction | DeleteTodosAction
