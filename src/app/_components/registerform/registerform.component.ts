import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
})
export class RegisterformComponent implements OnInit {
  model: any = {};
  isAdminCheck: boolean;
  isHRManagerCheck: boolean;
  isHRSpecialistCheck: boolean;
  isBoardMemberCheck: boolean;

  /*
   register() {
    console.log(this.model.isAdminCheck);
    console.log(this.model.isHRManagerCheck);
    console.log(this.model.isHRSpecialistCheck);
    console.log(this.model.isBoardMemberCheck);
  }
  */

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  private fillModel() {
    this.model.roles = new Array();
    if (this.isAdminCheck) this.model.roles.push('Administrator');
    if (this.isHRManagerCheck) this.model.roles.push('HR Manager');
    if (this.isHRSpecialistCheck) this.model.roles.push('HR Specialist');
    if (this.isBoardMemberCheck) this.model.roles.push('Board Member');
  }

  register() {
    this.fillModel();
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.toastr.success('Successful register!');
        this.router.navigateByUrl('/home');
      },
      error: (e) => {
        console.error(e);
        this.toastr.error(e.error);
      },
      complete: () => {
        console.log();
      },
    });
  }

  cancel() {
    this.router.navigateByUrl('/home');
  }
}
