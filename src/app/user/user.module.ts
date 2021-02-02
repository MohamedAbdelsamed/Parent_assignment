import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/state.reducer';
import { UserListComponent } from './components/user-list/user-list.component';
import { BreadCrumbComponent } from '../shared/components/bread-crumb/bread-crumb.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/store.effects';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature('user', userReducer)
  ],
  exports : [
    UserListComponent,
    // BreadCrumbComponent
  ]
})
export class UserModule { }
