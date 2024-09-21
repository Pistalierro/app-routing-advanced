import {ResolveFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {PhrasesService} from './phrases.service';
import {Observable} from 'rxjs';
import {Phrase} from './phrase';

export const phraseDetailsResolver: ResolveFn<Phrase | boolean> = (route): Observable<Phrase | boolean> | Promise<Phrase | boolean> => {
  const phrasesService = inject(PhrasesService);
  const router = inject(Router);

  const emptyNavigate = function () {
    if (route.component?.name === '_PhraseDetailsComponent') router.navigate(['phrases']).then();
    else if (route.component?.name === '_EditPhraseDetailsComponent') router.navigate(['admin/phrases']).then();
  };

  const id = +route.params['id'];

  if (isNaN(id)) emptyNavigate();

  return phrasesService.getPhrase(id)
    .then((phrase: Phrase | undefined) => {
      if (phrase) return phrase;

      emptyNavigate();
      return false;
    });
};
