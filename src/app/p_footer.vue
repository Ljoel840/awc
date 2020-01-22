<template>
	<footer>
		<div>
			<h4>Organiza</h4>
			<img src="@/assets/img/logo_delfasport.png" alt="logo delfasport">
			</div>
			<p class="copyright text-Left">delfasoft &#169; 2020 versión {{version}}</p>
	</footer>
</template>
<script>
export default {
	name:'p_footer'
}
</script>
<style scoped>
	footer {
		background-color: #000;
		width: 100%;
		height: 200px;
		text-align: center;
		padding: 30px;
			/* display: flex; */
		align-items: center;
	}

	p{
		color: #B3B3B3;
		text-align: center;
		padding: 20px
	}
	div{
		margin: auto;

	}
	img {
		width: 30%;
		min-width: 200px;
	}
	h4{
		color: #ffffff;
		text-align: center;
		display: block;
		font-family: 'Montserrat', sans-serif;
	}

	@media screen and (max-width: 1000px) {
	footer {
		padding: 10px;
		height: 100px;
	}
		
	}
</style>