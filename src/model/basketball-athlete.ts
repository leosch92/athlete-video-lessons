import { Athlete } from "./athlete";
import { ThreePointTrainVideo } from "./three-point-train-video";

export class BasketballAthlete extends Athlete {
    /**
     *
     */
    constructor() {
        super();
        this.trainVideo = new ThreePointTrainVideo();
    }
}