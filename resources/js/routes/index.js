import Instructions from '../components/steps/Instructions.vue';
import Settings from '../components/steps/Settings.vue';
import Rosca from '../components/steps/Rosca.vue';

export const routes = [
	{ path: '/', name: 'instructions', component: Instructions },
	{ path: '/settings', name: 'settings', component: Settings },
	{ path: '/rosca', name: 'rosca', component: Rosca },
];