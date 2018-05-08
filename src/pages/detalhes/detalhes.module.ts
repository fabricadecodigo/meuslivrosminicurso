import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesPage } from './detalhes';

@NgModule({
  declarations: [
    DetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesPage),
  ],
})
export class DetalhesPageModule {}
