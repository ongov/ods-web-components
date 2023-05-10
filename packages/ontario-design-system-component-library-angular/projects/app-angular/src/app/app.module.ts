import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentLibraryModule } from 'component-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameoneComponent } from './frameone/frameone.component';
import { FrametwoComponent } from './frametwo/frametwo.component';
import { FramethreeComponent } from './framethree/framethree.component';

@NgModule({
	declarations: [AppComponent, FrameoneComponent, FrametwoComponent, FramethreeComponent],
	imports: [BrowserModule, AppRoutingModule, ComponentLibraryModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
