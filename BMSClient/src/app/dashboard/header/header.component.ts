import { Component } from '@angular/core';
import { AutheticationService } from 'src/app/authetication/services/authetication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private auth: AutheticationService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }
}
