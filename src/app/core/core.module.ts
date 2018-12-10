import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderOptionsComponent } from './header/header-options/header-options.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      HeaderComponent,
      FooterComponent,
      HeaderOptionsComponent
    ],
  exports: [
      HeaderComponent,
      FooterComponent
    ]
})
export class CoreModule { }
