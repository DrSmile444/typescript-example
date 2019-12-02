/**
 * Example model
 * @see
 * Interfaces
 * Enums
 * */
export interface Post {
    id: number;
    name: string;
    lector: string;
    categories: Categories[];
}

export enum Categories {
    COURSE = 'Course',
    FRONTEND = 'Frontend',
    JS = 'JS',
    CSS = 'CSS',
    HTML = 'HTML',
}

export interface PostsResponse {
    posts: Post[];
}
