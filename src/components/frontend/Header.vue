<template>
    	<!--================ Start Header Area =================-->
	<header class="header_area">
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<!-- Brand and toggle get grouped for better mobile display -->
					<router-link class="navbar-brand logo_h" :to="{name: 'Home'}"><img src="/frontend/img/logo.png" alt=""></router-link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav justify-content-end">
							<li class="nav-item" :class="{ active: $route.name === 'Home' }">
								<router-link class="nav-link" :to="{name : 'Home'}">Home</router-link>
							</li>
							<li class="nav-item" :class="{ active: $route.name === 'About' }">
								<router-link class="nav-link" :to="{name : 'About'}">About</router-link>
							</li>
							<li class="nav-item" :class="{ active: $route.name === 'Service' }">
								<router-link class="nav-link" :to="{name : 'Service'}">Service</router-link>
							</li>
							<li class="nav-item" :class="{ active: $route.name === 'Contact' }">
								<router-link class="nav-link" :to="{ name: 'Contact' }">Contact</router-link>
							</li>
							
					
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
	<!--================ End Header Area =================-->

</template>


<script>
export default{
    name: 'Header',
	methods: {
    isCurrentRoute(path) {
      return this.$route.path === path
    }
  }
}
</script>


<style lang="scss" scoped>

</style>

