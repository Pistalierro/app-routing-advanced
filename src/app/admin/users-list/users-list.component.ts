import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../shared/users.service';
import {User} from '../../shared/user';
import {NgFor} from '@angular/common';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NgFor,
    RouterOutlet
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {

  users!: User[];

  constructor(private usersService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.usersService.getAllUsers().then((users => this.users = users));
  }

  onSelect(user: User) {
    this.router.navigate([user.id], {relativeTo: this.activatedRoute}).then();
  }
}
