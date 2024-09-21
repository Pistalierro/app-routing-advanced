import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {PhrasesService} from '../../shared/phrases.service';
import {Phrase} from '../../shared/phrase';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-edit-phrases-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet
  ],
  templateUrl: './edit-phrases-list.component.html',
  styleUrl: './edit-phrases-list.component.scss'
})
export class EditPhrasesListComponent implements OnInit {

  phrases!: Phrase[];
  selectedID!: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private phrasesService: PhrasesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: params => {
        this.selectedID = +params['id'];
        this.phrasesService.getAllPhrases().then(phrases => this.phrases = phrases);
      },
      error: err => console.error(err)
    });
  }

  onSelect(phrase: Phrase) {
    this.router.navigate([phrase.id], {relativeTo: this.activatedRoute}).then();
  }

  isSelected(phrase: Phrase) {
    return phrase.id === this.selectedID;
  }

}
