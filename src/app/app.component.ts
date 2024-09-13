import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from './AngularMaterialModule';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { AdminComponent } from './admin/admin/admin.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet,AngularMaterialModule,CustomerComponent,AdminComponent,CustomerModule,AdminModule,LoginComponent,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ECommerceWeb';
}
