<template>
  <div id="app">
		    <menupc/>
	 
    <div id="nav">
		
    </div>
	
    <router-view/>
	<p_footer/>
  </div>
</template>
<script>
import menupc from "./menupc.vue";
import p_footer from "./p_footer.vue";
export default {
	components:{
		menupc,
		p_footer
	}
}
</script>

<style>

#app{
	background-image: url('../assets/img/fondo.jpg');
	background-size: 100%;
	background-repeat: repeat;
	background-position: center;
}


#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#imgHeader {
	background-image: url('../assets/img/fondo_header.png');
	background-size: 100%;
	background-repeat:no-repeat;
	background-position:bottom;
	height: 22vw;
	position: relative;	
}
</style>
