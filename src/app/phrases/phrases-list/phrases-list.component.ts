import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {PhrasesService} from '../../shared/phrases.service';
import {Phrase} from '../../shared/phrase';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-phrases-list',
  standalone: true,
  imports: [
    NgFor,
    RouterOutlet
  ],
  templateUrl: './phrases-list.component.html',
  styleUrl: './phrases-list.component.scss'
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];
  selectedID!: number;

  constructor(private phrasesService: PhrasesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: params => {
        this.selectedID = +params['id'];

        this.phrasesService.getAllPhrases()
          .then(phrases => this.phrases = phrases);
      },
      error: err => console.error(err)
    });
  }

  onSelect(phrase: Phrase): void {
    this.router.navigate([phrase.id], {relativeTo: this.activatedRoute}).then();
  }

  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedID;
  }
}
