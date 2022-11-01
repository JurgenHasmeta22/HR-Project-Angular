import { Component, OnInit } from '@angular/core';
import { TokenDTO } from './_models/TokenDTO';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'HRProjectFE';

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: TokenDTO = JSON.parse(localStorage.getItem('token'));
    this.accountService.setCurrentUser(user);
  }

}
