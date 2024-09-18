import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Phrase} from '../../shared/phrase';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-phrase-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './phrase-details.component.html',
  styleUrl: './phrase-details.component.scss'
})
export class PhraseDetailsComponent implements OnInit {

  phrase!: Phrase;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: (data: Data) => {
        this.phrase = data['phrase'];
      },
      error: err => console.error(err)
    });
  }

  goToPhrasesList() {
    this.router.navigate(['../', {id: this.phrase?.id}], {relativeTo: this.activatedRoute}).then();
  }

}
