import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Athlete } from '../../model/athlete';
import { FootvolleyAthlete } from '../../model/footvolley-athlete';
import { BasketballAthlete } from '../../model/basketball-athlete';
import { SoccerAthlete } from '../../model/soccer-athlete';
import { TennisAthlete } from '../../model/tennis-athlete';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  videoLink: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const train = params['train'];
      let athlete: Athlete;

      switch (train) {
        case 'footvolley':
          athlete = new FootvolleyAthlete();
          break;
        case 'basketball':
          athlete = new BasketballAthlete();
          break;
        case 'soccer':
          athlete = new SoccerAthlete();
          break;
        case 'tennis':
          athlete = new TennisAthlete();
          break;
        default:
          break;
      }

      this.videoLink = athlete.getTrainVideoLink();
    });
  }

}
