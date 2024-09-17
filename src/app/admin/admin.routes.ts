import {Routes} from '@angular/router';
import {AdminHostComponent} from './admin-host/admin-host.component';
import {ManagePhrasesComponent} from './manage-phrases/manage-phrases.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminHostComponent,
    children: [
      {path: 'phrases', component: ManagePhrasesComponent},
      {path: '', component: ManagePhrasesComponent},
      {
        path: 'users',
        component: UsersListComponent,
        children: [
          {path: ':id', component: UserDetailsComponent},
        ]
      },
    ]
  }
];
