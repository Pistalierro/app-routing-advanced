import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../shared/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../shared/user';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  user?: User;

  constructor(private usersService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: params => {
        const id = +params['id'];
        if (isNaN(id)) return;
        this.usersService.getUser(id).then(user => this.user = user);
      }
    });
  }

  goToUsersList(): void {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute}).then();
  }

}
