import { APP_BASE_HREF } from '@angular/common';
import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiveComponent } from './components/five/five.component';
import { SixComponent } from './components/six/six.component';

@NgModule({
	declarations: [AppComponent, FiveComponent, SixComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [{ provide: APP_BASE_HREF, useValue: '/single-spa-demo' }],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(ngZone: NgZone) {
		const currentZone = window['NgZone'] ?? {};
		window['NgZone'] = {
			...currentZone,
			ng: ngZone
		};
	}
}
