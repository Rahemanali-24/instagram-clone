import { Component } from '@angular/core';
import { LoginFormComponent} from 'src/app/components';
import { LoginFormBannerComponent } from 'src/app/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports:[LoginFormComponent,LoginFormBannerComponent]
})
export default class LoginComponent {

}
