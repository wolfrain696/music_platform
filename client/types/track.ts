export interface IComment {
  _id: string;
  userName: string;
  text: string;
}

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

export interface TracksState {
  currentTrack: ITrack | null;
  tracks: ITrack[];
  error: string;
  loading: boolean;
}
