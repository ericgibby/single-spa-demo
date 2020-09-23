import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveComponent } from './components/five/five.component';
import { SixComponent } from './components/six/six.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
	{
		path: 'ng/five',
		component: FiveComponent
	},
	{
		path: 'ng/six',
		component: SixComponent
	},
	{
		path: '**',
		component: EmptyRouteComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
