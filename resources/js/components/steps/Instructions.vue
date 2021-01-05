<template>
	<div class="step-container">
		<div class="header" style="background-color: #F5F3DE;">
			<div class="flex flex-col md:flex-row justify-between items-center py-14 px-9">
				<div class="max-w-xl">
					<div v-if="!isMobile()">
						<h1 class="text-3xl mb-4 font-bold" >¡Bienvenidos!</h1>
						<p class="text-2xl font-normal leading-relaxed mb-8">Con <b>Rosca Virtual</b> comparte con tu familia y amigos la tradición de la Rosca de Reyes  ¡Sin salir de casa!</p>
						<button class="py-3 px-4 bg-orange-custom text-white rounded-lg mb-4 md:mb-0" @click="navigateNext()">¡Próximamente!</button>
					</div>

					<div v-if="isMobile()">
						<h1 class="text-3xl mb-4 font-bold" >¡Lo sentimos mucho!</h1>
						<p  class="text-base font-normal leading-relaxed my-2"> En este momento las roscas se parten en bandejas más grandes que tu celular. <b>Utiliza tu computadora</b> e invita a tu familia y amigos para disfrutarla al máximo! </p>
						<p class="text-xs font-normal leading-relaxed my-2">Pst, pst, visítanos en nuestra página de <a href="https://www.facebook.com/LaRoscaVirtual" class="font-bold" target="_blank">Facebook</a> y ve por un chocolatito para acompañar tu rosca.</p>
					</div>

				</div>
				<div>
					<img v-if="!isMobile()" src="/assets/img/header.png" alt="Rosca Virtual" style="max-width: 250px;">
					<img v-if="isMobile()" src="/assets/img/SadGrogu.png" alt="Rosca Virtual" style="max-width: 250px;">
				</div>
			</div>
		</div>
		<div class="px-9 py-9">
			<div class="mb-8">
				<h3 class="text-2xl font-bold leading-relaxed text-orange-custom mb-4">¿Cómo empezar?</h3>
				<div class="flex flex-col md:flex-row justify-between">
					<div class="max-w-xl">
						<p class="text-base font-normal leading-relaxed">Para utilizar Rosca Virtual es indispensable poder compartir tu pantalla con tus amigos.  <br>¡Puedes usar una de estas herramientas!</p>
						<p class="text-base font-normal leading-relaxed mt-2 md:mt-6"><b>Pro Tip:</b> ¡No compartas tu pantalla hasta qué tengas lista tu rosca!</p>
					</div>
					<div class="flex flex-row justify-center md:justify-between items-center my-4 md:my-0">
						<img src="/assets/img/zoom.png" alt="Zoom" class="mx-4" style="max-height: 60px">
						<img src="/assets/img/meet.png" alt="Google meets" class="mx-4" style="max-height: 60px">
					</div>
				</div>
			</div>
			<div class="mb-8">
				<h3 class="text-2xl font-bold leading-relaxed text-orange-custom mb-4">Paso 1: Selecciona el tamaño de tu rosca</h3>
				<div class="flex flex-row">
					<div class="max-w-xl">
						<p class="text-base font-normal leading-relaxed">Tenemos variedad para los paladares más distinguidos.</p>
					</div>
					<div></div>
				</div>
			</div>
			<div class="mb-8">
				<h3 class="text-2xl font-bold leading-relaxed text-orange-custom mb-4">Paso 2: Selecciona a tu bebé</h3>
				<div class="flex flex-row">
					<div class="max-w-xl">
						<p class="text-base font-normal leading-relaxed mb-4">Si ya estamos innovando con la Rosca Virtual  ¿Por qué no seleccionar otro bebé?  </p>
						<p class="text-base font-normal leading-relaxed"> Puedes escoger entre usar al bebé tradicional o una figurita del bebé más famoso del momento.</p>
					</div>
					<div></div>
				</div>
			</div>
			<div class="mb-8">
				<h3 class="text-2xl font-bold leading-relaxed text-orange-custom mb-4">Paso 3: ¿Cuántos bebés habrá en tu rosca?</h3>
				<div class="flex flex-row">
					<div class="max-w-xl">
						<p class="text-base font-normal leading-relaxed mb-4">Selecciona cuántos bebés quieres que haya escondidos en tu rosca.  </p>
						<p class="text-base font-normal leading-relaxed">¿Quieres una rosca llena de bebés?  ¡Tus deseos son órdenes!</p>
					</div>
					<div></div>
				</div>
			</div>
			<div class="mb-8">
				<h3 class="text-2xl font-bold leading-relaxed text-orange-custom mb-4">Paso 4: Personaliza los castigos o cambialos a premios!</h3>
				<div class="flex flex-row">
					<div class="max-w-xl">
						<p class="text-base font-normal leading-relaxed mb-4">Por default los castigos de los bebés son los clasicos tamales, pero para hacerlo más divertido.... ¡Puedes personalizarlos!  </p>
						<p class="text-base font-normal leading-relaxed">Crea castigos únicos o ¿por qué no? que los bebés sean premios. <br> ¡Tú decides!</p>
						<p class="text-base font-normal leading-relaxed mt-2 md:mt-6"><b>Pro Tip:</b> Combina castigos con premios para hacer el juego más entretenido</p>
					</div>
					<div></div>
				</div>
			</div>
			<div class="mb-8">
				<h3 class="text-2xl font-bold leading-relaxed text-orange-custom mb-4">Paso 5: Tu rosca está lista ¡COMPARTE TU PANTALLA!</h3>
				<div class="flex flex-row">
					<div class="max-w-xl">
						<p class="text-base font-normal leading-relaxed">Ahora sí ¡a disfrutar la Rosca Virtual con tus seres queridos! <b>No olvides compartir tu pantalla</b> para que todos disfruten el momento.</p>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Mobile from '@/mixins/mobile.js'
	export default {
		mixins: [Mobile],
		methods: {
			navigateNext: function(){
				this.$router.push('/settings/');
			}
		}
	}
</script>