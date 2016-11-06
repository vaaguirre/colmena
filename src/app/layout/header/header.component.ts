import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service'
@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private service: AccountService) {}
}