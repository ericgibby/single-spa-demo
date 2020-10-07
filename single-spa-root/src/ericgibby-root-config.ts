import { registerApplication, start } from 'single-spa';
import { constructApplications, constructLayoutEngine, constructRoutes } from 'single-spa-layout';
import { HTMLLayoutData } from 'single-spa-layout/dist/types/constructRoutes';
import store from './redux/configureStore';
import { clearToken, tokenReceived } from './redux/modules/auth.module';

const data = {
	props: {
		store,
		clearTokenAction: clearToken,
		tokenReceivedAction: tokenReceived
	}
};

const routes = constructRoutes(document.querySelector('#single-spa-layout') as HTMLTemplateElement, (data as unknown) as HTMLLayoutData);
const applications = constructApplications({
	routes,
	loadApp({ name }) {
		return System.import(name);
	}
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

window.addEventListener('auth:token', ({ detail }: CustomEvent) => {
	console.log('Received token:', detail);
});
