<script>
	import { onMount } from 'svelte';
	import SignInComponent from './SignInComponent.svelte';

	onMount(async () => {
		window.addEventListener('resize', () => {
			const width = document.body.clientWidth;
			const dropdown = document.querySelector('.dropdown');
			if (width >= 768) {
				dropdown.classList.remove('hidden');
				dropdown.classList.add('block');
			} else {
				dropdown.classList.add('hidden');
				dropdown.classList.remove('block');
			}
		});
	});

	function dropDownStuff() {
		const dropdown = document.querySelector('.dropdown');
		dropdown.classList.toggle('hidden');
		dropdown.classList.toggle('block');
	}
</script>

<header
	class="w-full h-24 flex justify-between p-4 bg-cafe-header dark:bg-gwen-header text-cafe-orange dark:text-neon-blue-300 items-center flex-initial shadow relative"
>
	<div class="hidden md:flex ml-4 items-center gap-4 justify-center">
		<a href="/" class="flex items-center justify-center gap-2 text-4xl font-bold">
			Seamstress
			<img src="gwen.png" alt="gwen" loading="lazy" width="48" height="48" />
		</a>
		<a class="mx-4" href="/about">About</a>
	</div>
	<div class="block md:hidden">
		<button
			on:click={dropDownStuff}
			class="w-max p-1 text-black text-sm leading-4 font-bold rounded-3xl bg-cafe-bright dark:bg-gwen-bright"
		>
			<img src="Burger-large.png" alt="burger" />
		</button>
	</div>
	<div
		class="hidden md:hidden dropdown absolute w-screen left-0 top-20 bg-cafe-header dark:bg-gwen-header ml-0"
	>
		<a href="/" class="flex text-4xl font-bold ml-4">
			Seamstress
			<img src="gwen.png" alt="gwen" loading="lazy" width="48" height="48" />
		</a>
		<a class="ml-4" href="/about">About</a>
		<div class="tiny:hidden">
			<SignInComponent />
		</div>
	</div>
	<div class="ml-4 hidden tiny:flex flex-between items-center gap-4 mr-4">
		<SignInComponent />
	</div>
</header>
