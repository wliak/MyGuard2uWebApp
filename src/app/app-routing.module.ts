import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { BillingComponent } from './pages/billing/billing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticeboardComponent } from './pages/noticeboard/noticeboard.component';
import { ReportComponent } from './pages/report/report.component';
import { UnitinfoComponent } from './pages/unitinfo/unitinfo.component';
import { VisitorComponent } from './pages/visitor/visitor.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},  
  {path:'unitinfo', component:UnitinfoComponent},  
  {path:'visitor', component:VisitorComponent},  
  {path:'report', component:ReportComponent},  
  {path:'booking', component:BookingComponent}, 
  {path:'billing', component:BillingComponent},  
  {path:'noticeboard', component:NoticeboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
