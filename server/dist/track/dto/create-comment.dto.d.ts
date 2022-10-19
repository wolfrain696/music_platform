import { ObjectId } from 'mongoose';
export declare class CreateCommentDto {
    readonly userName: string;
    readonly text: string;
    readonly trackId: ObjectId;
}
