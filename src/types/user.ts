export interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
}

export interface loggedUser {
    email: string;
    password: string;
}