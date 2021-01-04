<template>
	<div>
		<div v-if='size == 10'>
			<small-rosca></small-rosca>
		</div>
		<div v-if='size == 20'>
			<medium-rosca></medium-rosca>
		</div>
		<div v-if='size == 30'>
			<large-rosca></large-rosca>
		</div>
		<div v-if='size == 50'>
			<extra-rosca></extra-rosca>
		</div>
	</div>
</template>
<script>
	import SmallRosca from '../roscas/SmallRosca.vue';
	import MediumRosca from '../roscas/MediumRosca.vue';
	import LargeRosca from '../roscas/LargeRosca.vue';
	import ExtraRosca from '../roscas/ExtraRosca.vue';
	export default {
		components: {
			SmallRosca,
			MediumRosca,
			LargeRosca,
			ExtraRosca
		},
		computed: {
			size: {
				get() {
					return this.$store.state.size
				},
			},
		},
		mounted(){
			if (! this.$cookies.get('babies')){
				this.$router.push('/size');
			}
		}
	}
</script>