import Instructions from '../components/steps/Instructions.vue';
import Babies from '../components/steps/Babies.vue';
import Rosca from '../components/steps/Rosca.vue';

export const routes = [
	{ path: '/', name: 'instructions', component: Instructions },
	{ path: '/babies', name: 'babies', component: Babies },
	{ path: '/rosca', name: 'rosca', component: Rosca },
];