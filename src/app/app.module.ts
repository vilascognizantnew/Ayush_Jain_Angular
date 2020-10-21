import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCountComponent } from './employee/employee-count/employee-count.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    FooterComponent,
    EmployeeListComponent,
    EmployeeCountComponent
  ],
  imports: [	
    BrowserModule,
	FormsModule,
    AppRoutingModule
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
