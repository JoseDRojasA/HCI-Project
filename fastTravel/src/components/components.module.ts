import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { RutePreviewComponent } from './rute-preview/rute-preview';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [RutePreviewComponent],
	imports: [CommonModule, IonicModule],
	exports: [RutePreviewComponent]
})
export class ComponentsModule { }
