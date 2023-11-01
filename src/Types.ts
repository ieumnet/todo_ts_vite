
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