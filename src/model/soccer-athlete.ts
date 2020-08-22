import { Athlete } from "./athlete";
import { HeaderTrainVideo } from "./header-train-video";

export class SoccerAthlete extends Athlete {
    /**
     *
     */
    constructor() {
        super();
        this.trainVideo = new HeaderTrainVideo();
    }
}