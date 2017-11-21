import { Activity } from './activity.class';
import { Comment } from './comment.class';

export interface Place {
    name: string;
    comments: Array<Comment>;
    recommendations: Array<string>;
    activities: Array<Activity>;
}