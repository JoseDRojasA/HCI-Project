import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { RutePreviewComponent } from './rute-preview/rute-preview';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu';
@NgModule({
	declarations: [RutePreviewComponent,
    MenuComponent],
	imports: [CommonModule, IonicModule],
	exports: [RutePreviewComponent,
    MenuComponent]
})
export class ComponentsModule { }
