import { TrainVideo } from "./train-video";

export class ChestBasicSkillVideo implements TrainVideo {
    getVideoLink(): string {
        return 'https://www.youtube.com/watch?v=HGYhaehWMuI';
    }
}