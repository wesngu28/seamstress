<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div
	class="flex overflow-x-hidden relative h-screen bg-cafe-wrapper dark:bg-gwen-wrapper flex-col justify-center"
>
	<Header />
	<slot />
	<Footer />
</div>
