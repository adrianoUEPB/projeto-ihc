import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { SnackComponent } from './snack/snack.component';
import { NotificationService } from './notification.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputComponent, SnackComponent],
  exports: [
    InputComponent,
    SnackComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NotificationService
      ]
    }
  }
}
