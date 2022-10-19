import { Document } from 'mongoose';
import { Track } from './track.schema';
import * as mongoose from 'mongoose';
export declare type CommentDocument = Comment & Document;
export declare class Comment {
    userName: string;
    text: string;
    track: Track;
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, any>, {}, {}, {}, {}, "type", Comment>;
