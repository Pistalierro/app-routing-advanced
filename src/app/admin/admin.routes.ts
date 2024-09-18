import {Routes} from '@angular/router';
import {AdminHostComponent} from './admin-host/admin-host.component';
import {canActivateGuard} from '../shared/can-activate.guard';
import {EditPhrasesListComponent} from '../edit-phrases/edit-phrases-list/edit-phrases-list.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {EditPhraseDetailsComponent} from '../edit-phrases/edit-phrase-details/edit-phrase-details.component';
import {canDeactivateGuard} from '../shared/can-deactivate.guard';
import {phraseDetailsResolver} from '../shared/phrase-details.resolver';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminHostComponent,
    canActivate: [canActivateGuard],
    children: [
      {path: '', redirectTo: 'phrases', pathMatch: 'full'},
      {
        path: 'phrases',
        component: EditPhrasesListComponent,
        children: [
          {
            path: ':id',
            component: EditPhraseDetailsComponent,
            canDeactivate: [canDeactivateGuard],
            resolve: {
              phrase: phraseDetailsResolver
            }
          },
        ]
      },
      {
        path: 'users', component: UsersListComponent,
        children: [
          {
            path: ':id',
            component: UserDetailsComponent,
            canDeactivate: [canDeactivateGuard],
          },
        ]
      },
    ]
  }
];
