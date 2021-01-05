<template>
	<div class="step-container">
		<div  class="max-w-2xl mx-auto text-center py-4">
			<label for="edit" class="text-xl font-bold leading-relaxed my-2 text-center">Gracias por tu preferencia!</label>
			<p class="text-center text-base leading-6 mb-2">Esperamos que hayan disfrutrado de nuestra rosca!</p>
			<p class="text-center text-base leading-6 mb-2"> Te agradeceriamos mucho tus comentarios en nuestras páginas de <a href="https://www.facebook.com/LaRoscaVirtual" class="text-yellow-500" target="_blank">facebook</a>, <a href="https://twitter.com/RoscaVirtual" class="text-yellow-500" target="_blank">twitter</a> o <a href="https://www.instagram.com/roscavirtual/" class="text-yellow-500" target="_blank">instagram!</a></p>
			<p class="text-center text-base leading-6 mb-2"> Quieres volver a empezar? </p>
			<p class="text-center text-sm leading-6 mb-2"> No te preocupes, puedes pedir las roscas que quieras, son libres de gluten, no engordan y el envió va por nuestra cuenta ;)</p>
			<button class="py-3 px-4 bg-yellow-500 text-white rounded-lg" @click="navigateBeg" type="button">Empezar de Nuevo</button>
		</div>
	</div>
</template>
<script>
	export default {
		methods: {
			navigateBeg: function(){
				this.$router.push('/settings');
			},
		}
	}
</script>