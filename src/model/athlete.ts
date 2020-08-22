import { TrainVideo } from "./train-video";

export abstract class Athlete {
    public trainVideo: TrainVideo;

    public getTrainVideoLink(): string {
        return this.trainVideo.getVideoLink();
    }
}
