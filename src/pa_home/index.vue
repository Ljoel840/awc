<template>
  <div class="home">
	  <div class="div1">
    		<img alt="fecha" src="@/assets/img/fecha.png">
	  </div>
	  <div class="div2">
    		<img alt="logo" src="@/assets/img/logo_awc.png">
	  </div>
	  <div class="div3">
    		<img alt="lugar" src="@/assets/img/lugar.png">
	  </div>
	  	<div class="div4">
    		<img alt="revancha box" src="@/assets/img/revancha.png">
			<img alt="revancha box" src="@/assets/img/preparate.png">
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  
}
</script>
<style scoped>
.home {
	display: grid;
	grid-template-columns: .5fr 1fr .5fr;
	grid-template-rows: 1fr .5fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	padding: 0 20px 0;
	margin-top: -50px
	
}

img {
	width: 80%;
	padding: 10px;
	filter: drop-shadow(5px 5px 5px #000);
}

.div1 { grid-area: 1 / 1 / 2 / 2; align-self: end }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; align-self: end}
.div4 { grid-area: 2 / 1 / 3 / 4; padding: 50px 0}


@media screen and (max-width: 1000px) {
	.home {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr repeat(2, .3fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		
	}	
	.div1 { grid-area: 2 / 1 / 3 / 2; }
	.div2 { grid-area: 1 / 1 / 2 / 3; align-self: end }
	.div3 { grid-area: 2 / 2 / 3 / 3; align-self: end}
	.div4 { grid-area: 3 / 1 / 4 / 3; padding: 20px 0}
		
	}
</style>
