import { Comment } from './comment.class';
export interface Activity {
    name: string;
    price: number;
    time: string;
    comments: Array<Comment>;
    recommendations: Array<string>;
    images: Array<string>;
    /**
     * 0: Bueno
     * 1: Bonito
     * 2: Barato
     *
     * @type {Array<number>}
     * @memberof Activity
     */
    scores: Array<number>;
}