import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public id: any = null;
  public localStorageStuff: any = null;
  public showNew: boolean = false;
  public showEdit: boolean = false;
  public projectId: any = null;
  person: any = null;
  model: any = {};
  allProjects: any = [];

  constructor(
    private ProjectsService: ProjectsService,
    private toastr: ToastrService,
    private acountService: AccountService
  ) { }

  ngOnInit(): void {
    this.localStorageStuff = JSON.parse(localStorage.getItem('token'))
    this.id = this.localStorageStuff.userId
    this.acountService.getUserInfo(this.id).subscribe((result: any) => {
      this.person = result;
    });
    this.ProjectsService.getAllProjects().subscribe((result: any) => {
      this.allProjects = result;
    });
  }

  checkRolesToShowTable() {
    let show = false;

    if (this.person !== undefined && this.person !== null) {
      for (const role of this.person.userRolis) {
        if (role.roli.roliEmri === "HR Manager") {
          show = true;
          break;
        }
      }
      return show
    }
  }

  deleteProject(projectId: any) {
    this.ProjectsService.deleteProject(projectId).subscribe({
      next: () => {
        this.toastr.success('Successful project deleted!');
        this.ProjectsService.getAllProjects().subscribe((result: any) => {
          this.allProjects = result;
        });
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

  updateProject() {
    this.ProjectsService.updateProject(this.projectId, this.model).subscribe({
      next: () => {
        this.toastr.success('Successful project change!');
        this.ProjectsService.getAllProjects().subscribe((result: any) => {
          this.allProjects = result;
        });
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

  addProject() {
    this.ProjectsService.addProject(this.model).subscribe({
      next: () => {
        this.toastr.success('Successful project created!');
        this.ProjectsService.getAllProjects().subscribe((result: any) => {
          this.allProjects = result;
        });
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

  onEditForm(projectId: any) {
    this.projectId = projectId;
    this.showNew = false;
    this.showEdit = true;
    this.model = {};
  }

  onNewForm() {
    this.showEdit = false;
    this.showNew = true;
    this.model = {}
  }

}
