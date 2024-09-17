import {Component, OnInit} from '@angular/core';
import {PhrasesService} from '../../shared/phrases.service';
import {ActivatedRoute, Router} from '@angular/router';
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

  phrase?: Phrase;

  constructor(private phrasesService: PhrasesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: params => {
        const id = +params['id'];
        if (isNaN(id)) return;

        this.phrasesService.getPhrase(id)
          .then(phrase => this.phrase = phrase);
      },
      error: err => console.error(err)
    });
  }

  goToPhrasesList() {
    this.router.navigate(['../', {id: this.phrase?.id}], {relativeTo: this.activatedRoute}).then();
  }

}
