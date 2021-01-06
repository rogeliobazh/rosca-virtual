<template>
	<div class="rosca-mesa extra">
		<div class="rosca-container">
			<transition name="fade">
				<div v-show="loadPie == true" >
					<div v-if="piecesLeft > 0" class="grid-container">
						<div
							v-for="(piece, index) in pieces"
							v-on:click="checkBabie(piece, index)"
							:data-piece="index+1"
							:key="piece"
							:class="'rp-'+index">
							<div class="piece-number">{{index+1}}</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
		<transition name="fade">
			<div v-if="piecesLeft == 0" >
				<thank-you></thank-you>
			</div>
		</transition>
	</div>
</template>
<script>
	import ThankYou from './ThankYou.vue'
	import Roscas from '@/mixins/roscas.js'
	export default {
		components: {
			ThankYou,
		},
		mixins: [Roscas],
		data() {
			return {
				pieces: 50,
				price: 0,
				piecesLeft: 1,
				babies: this.$store.state.babies,
				prieces: [],
				hiddenPlaces: [],
				loadPie: false,
				top: ["1","2","3","4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
				right: ["21", "22", "23", "24", "25"],
				bottom: ["26","27","28","29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
				left: ["46", "47", "48", "49", "50"]
			}
		},
	}
</script>
<style type="text/css">
	.rp-top .piece-number {
		top: -65px;
	}
	.rp-left .piece-number {
		left: -65px;
	}
	.rp-bottom .piece-number {
		bottom: -65px;
	}
	.rp-right .piece-number {
		right: -65px;
	}
</style>