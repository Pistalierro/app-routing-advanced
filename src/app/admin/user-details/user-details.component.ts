import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../shared/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../shared/user';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CanComponentDeactivate} from '../../shared/can-component-deactivate';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit, CanComponentDeactivate {

  user?: User;
  editName?: string;
  editRole?: string;


  constructor(private usersService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: params => {
        const id = +params['id'];
        if (isNaN(id)) return;
        this.usersService.getUser(id).then(user => {
          this.user = user;
          this.editName = user?.name;
          this.editRole = user?.role;
        });
      }
    });
  }

  goToUsersList(): void {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute}).then();
  }

  isChanged(): boolean {
    return !(this.user?.name === this.editName && this.user?.role === this.editRole);
  }

  save(): void {
    if (this.user) {
      this.user.name = this.editName || 'empty';
      this.user.role = this.editRole || 'empty';
    }
  }

  canDeactivate(): boolean {
    if (!this.user) return true;
    if (!this.isChanged()) return true;

    return confirm('Изменения не сохранены. \nДанные будут потеряны. \nПокинуть страницу в любом случае?');
  }

}
