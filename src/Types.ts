
export type TodoRow = {
    job: string;
    done: boolean;
}

export enum ShowOption {
    ALL,
    ACTIVE,
    COMPLETED
}

export type TodoList = {
    title: string;
    list: TodoRow[];
    showOption: ShowOption;
}
export type ExtToto = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
