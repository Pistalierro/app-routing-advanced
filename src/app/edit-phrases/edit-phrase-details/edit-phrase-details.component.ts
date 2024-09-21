import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Phrase} from '../../shared/phrase';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {CanComponentDeactivate} from '../../shared/can-component-deactivate';

@Component({
  selector: 'app-edit-phrase-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './edit-phrase-details.component.html',
  styleUrl: './edit-phrase-details.component.scss'
})
export class EditPhraseDetailsComponent implements OnInit, CanComponentDeactivate {

  phrase!: Phrase;
  editValue!: string;
  editLanguage!: string;


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: (data: Data) => {
        this.phrase = data['phrase'];
        this.editValue = this.phrase.value;
        this.editLanguage = this.phrase.language;
      },
      error: err => console.error(err)
    });
  }

  goToPhrasesList() {
    this.router.navigate(['../', {id: this.phrase?.id}], {relativeTo: this.activatedRoute}).then();
  }

  isChanged(): boolean {
    return !(this.phrase?.value === this.editValue && this.phrase?.language === this.editLanguage);
  }

  save(): void {
    if (this.phrase) {
      this.phrase.value = this.editValue || `empty`;
      this.phrase.language = this.editLanguage || `empty`;
    }
  }

  canDeactivate(): boolean {
    if (!this.phrase) return true;
    if (!this.isChanged()) return true;

    return confirm('Изменения не сохранены. \nДанные будут потеряны. \nПокинуть страницу в любом случае?');
  }
}
