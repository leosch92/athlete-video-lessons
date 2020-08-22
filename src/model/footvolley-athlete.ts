import { Athlete } from "./athlete";
import { TrainVideo } from "./train-video";
import { ChestBasicSkillVideo } from "./chest-basic-skill-video";

export class FootvolleyAthlete extends Athlete {
    public trainVideo: TrainVideo;
    
    constructor() {
        super();
        this.trainVideo = new ChestBasicSkillVideo();
    }
}