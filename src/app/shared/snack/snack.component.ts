import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from "@angular/animations"

import {NotificationService} from '../notification.service'

import { timer } from 'rxjs/observable/timer'
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        top: '0px'
      })),
      state('visible', style({
        opacity: 1,
        top: '70px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackComponent implements OnInit {

  message: string

  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier
        .pipe(
          tap(message=>{
            this.message = message
            this.snackVisibility = 'visible'
          }),
          switchMap(message => timer(3000)),
      ).subscribe()
  }

  hiddenSnack() {
    this.snackVisibility = 'hidden';
  }
}
