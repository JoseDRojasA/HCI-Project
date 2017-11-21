import { Town } from './town.class';

export interface Rute {
    name: string;
    stars: number;
    towns: Array<Town>;
    plan: string;
}