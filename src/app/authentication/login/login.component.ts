import { Component } from '@angular/core';
import { LoginFormComponent, LoginFormFooterComponent} from 'src/app/components';
import { LoginFormBannerComponent } from 'src/app/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports:[LoginFormComponent,LoginFormBannerComponent,LoginFormFooterComponent]
})
export default class LoginComponent {

}
