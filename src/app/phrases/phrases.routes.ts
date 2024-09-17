import {Routes} from '@angular/router';
import {PhrasesListComponent} from './phrases-list/phrases-list.component';
import {PhrasesHostComponent} from './phrases-host/phrases-host.component';
import {PhraseDetailsComponent} from './phrase-details/phrase-details.component';

export const phrasesRoutes: Routes = [
  {
    path: '',
    component: PhrasesHostComponent,
    children: [
      {
        path: '',
        component: PhrasesListComponent,
        children: [
          {path: ':id', component: PhraseDetailsComponent},
        ]
      }
    ]
  }
];
