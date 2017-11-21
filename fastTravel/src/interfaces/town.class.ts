import { Place } from './place.class';
export interface Town {
    name: string;
    department: string;
    places: Array<Place>;
}