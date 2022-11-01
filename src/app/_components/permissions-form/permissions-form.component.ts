import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-permissions-form',
  templateUrl: './permissions-form.component.html',
  styleUrls: ['../permissions/permissions.component.css']
})
export class PermissionsFormComponent implements OnInit {

  @Input() model: any;
  @Input() person: any;
  @Input() toShowForm: any;
  @Output() askPermission = new EventEmitter();
  @Output() checkRolesToShowForm = new EventEmitter();
  @Output() getBalancaLeje = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAskPermission() {
    this.askPermission.emit();
  }

  onCheckRolesToShowForm() {
    this.checkRolesToShowForm.emit();
  }

  onGetBalancaLeje() {
    this.getBalancaLeje.emit()
  }

  onCancel() {
    this.cancel.emit();
  }
}
