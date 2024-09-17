import {Routes} from '@angular/router';
import {AdminHostComponent} from './admin-host/admin-host.component';
import {ManagePhrasesComponent} from './manage-phrases/manage-phrases.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminHostComponent,
    children: [
      {path: 'users', component: ManageUsersComponent},
      {path: 'phrases', component: ManagePhrasesComponent},
      {path: '', component: ManagePhrasesComponent},
    ]
  }
];
