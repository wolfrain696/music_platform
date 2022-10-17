import { ITrack } from './track';

export interface PlayerState {
  active: ITrack | null;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}
