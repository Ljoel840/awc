<template>
	<section>
		<div class="contenedor">
			<div class="div1">
				<img src="@/assets/img/izquierda.png" alt="flecha izquierda" @click="decrementar()">
			</div>
			<div class="div2">
				<img :src="imgParametros[posicion]" style="min-width:220px" >
			</div>
			<div class="div3">
				<img src="@/assets/img/derecha.png" alt="flecha derecha" @click="incrementar()">
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name:'parametros',
	data() {
		return {
			imgParametros:[
				require('@/assets/img/parametros1.jpg'),
				require('@/assets/img/parametros2.jpg'),
				require('@/assets/img/parametros3.jpg'),
				require('@/assets/img/parametros4.jpg'),
				require('@/assets/img/parametros5.jpg'),
				require('@/assets/img/parametros6.jpg')],
			posicion:0
		}
	},
	methods:{
		incrementar(){
			if (this.posicion==5){
				this.posicion=0
			} else {this.posicion++}
		},
		decrementar(){
			if (this.posicion==0){
				this.posicion=5
			} else {this.posicion--}
		}
	}
	
	
}
</script>
<style scoped>
	section{
		padding: 30px 0
	}
	.contenedor{
		margin-top: -50px;
		display: grid;
		grid-template-columns: 50px 1fr 50px;
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		
	}

	.div1 { grid-area: 1 / 1 / 2 / 2; align-self: center; cursor: pointer;}
	.div2 { grid-area: 1 / 2 / 2 / 3;  align-self: center; }
	.div3 { grid-area: 1 / 3 / 2 / 4;  align-self: center; cursor: pointer;}

	img {
		width: 30%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
	}
	.div2 img {
		width: 50vh;
	}

	@media screen and (max-width: 1000px) {
		.div2 img {
		width: 50vw;
	}
	}
	
	
	
</style>