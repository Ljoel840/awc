 <template>
	<div id="imgHeader">
	<div id="menupc" >
		<div class="barra" v-if="mostrar">
			<ul>
				<li @click="mostrarMenu()"><router-link to="/" class="opciones activa" >HOME</router-link></li>
				<li><router-link to="/" class="opciones">Leader Board</router-link></li>
				<li><router-link to="/" class="opciones">Inscripción</router-link></li>
				<li><router-link to="/" class="opciones">Mi Cuenta</router-link></li>
				<li @click="mostrarMenu()"><router-link to="/parametros" class="opciones activa">Parámetros</router-link></li>
				<li><router-link to="/" class="opciones">Hoteles</router-link></li>
				<li><router-link to="/" class="opciones">Tralados</router-link></li>
				<li><router-link to="/" class="opciones">Contactos</router-link></li>

			</ul>
		</div>

		<div class="topnav" id="myTopnav">
			<router-link to="/" class="opciones activa">HOME</router-link>
			<router-link to="/" class="opciones">Leader Board</router-link>
			<router-link to="/" class="opciones">Inscripción</router-link>
			<router-link to="/" class="opciones">Mi Cuenta</router-link>
			<router-link to="/parametros" class="opciones activa" >Parámetros</router-link>
			<router-link to="/" class="opciones">Hoteles</router-link>
			<router-link to="/" class="opciones">Traslado</router-link>
			<router-link to="/" class="opciones">Contáctanos</router-link>
			<div class="icon" @click="mostrarMenu()">
    			<i :class="boton"></i>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
export default {
	name:'menupc',
	data() {
		return {
			mostrar:false,
			boton:'fa fa-bars'
		}
	},
	methods: {
		mostrarMenu(){
			this.mostrar=!this.mostrar
			if (this.mostrar){
				this.boton='fa fa-times'
			}else{this.boton='fa fa-bars'}
		},
		
	}
}
</script>
<style scoped>
	#menupc{
		/* margin: auto; */
		padding-top: 30vw;
		position: absolute;
		width: 80vw;
		background-image: url('../assets/img/fondo_menu.png');
		background-size: 80%;
		background-repeat:no-repeat;
		background-position:center;
		height: 40px;
		position: relative;	
		display: inline-block;
    	text-align: center;
	}

	#imgHeader {
		background-image: url('../assets/img/fondo_header.png');
		background-size: 100%;
		background-repeat:no-repeat;
		background-position:bottom;
		height: 22vw;
		position: relative;	
	}

	.barra{ 
		position: absolute;
		display: fixed;
		margin: 20vw 0 0;
		padding: 10px;
		top: 20px;
		left: 10px;
		/* transform: translate(-50%, -50%); */
		z-index: 1;
		background-color: rgba(0, 0, 0, 0.9);
	}

	ul {
		padding: 0;
		width: 280px;
	}
	
	ul li {
		color: #fff;
		display: block;
		margin: 0;
		padding: 5px;
		cursor: pointer;
	}

	.opciones {
		text-decoration: none;
		color: #B3B3B3;
	}

	ul li:hover {
		background-color: #996633;
		color: #fff;
	}


	.topnav{
		position: absolute;
		display: flex;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		width: 100%;
		justify-content: center;
	}
	
	.topnav .opciones {
		float: left;
		display: block;
		color: #808080;
		text-align: center;
		padding: 8px 10px;
		text-decoration: none;
		font-size: 17px;
	}
	.topnav .activa {
		float: left;
		display: block;
		color: #B3B3B3;
		text-align: center;
		padding: 8px 10px;
		text-decoration: none;
		font-size: 17px;
	}

	.topnav .opciones:hover {
		background-color: #808080;
		color: black;

	}

	.topnav .opciones.active {
		/* background-color: #4CAF50; */
		color: white;
	}

	.topnav .icon {
		display: none;
		background-color: rgba(0, 0, 0, 0.6);
		padding: 5px 10px;
	}

	@media screen and (max-width: 1250px) {
		#menupc{
		width: 98vw;}
	}

	@media screen and (max-width: 1000px) {
		#menupc{
			background-image: none;
			height: auto;
		}
		
		.topnav{
			justify-content: start;
			transform: translate(-50%, 0%);
			

		}
		.topnav .opciones {display: none}
		.topnav div.icon {
			float: right;
			display: block;
			cursor: pointer;

			
		}
	}
	@media screen and (max-width: 1000px) {
		.topnav.responsive {position: relative;}
		.topnav.responsive .icon {
			position: absolute;
			right: 0;
			top: 0;
			color: #fff
		}
		.topnav.responsive .opciones {
			float: none;
			display: block;
			text-align: left;
			justify-self: end;
		}
	}
	
</style>