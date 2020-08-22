import { Athlete } from "./athlete";
import { BackhandTrainVideo } from "./backhand-train-video";

export class TennisAthlete extends Athlete {
    /**
     *
     */
    constructor() {
        super();
        this.trainVideo = new BackhandTrainVideo();
    }
}