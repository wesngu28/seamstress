<script>
	import { onMount } from 'svelte';
	import { signedStatus } from '../stores/stores';
	import { publicSuperbase, signInWithGitHub, signout } from '../util/supabase';

	onMount(async () => {
		const { data: session, error: sessionerror } = await publicSuperbase.auth.getSession();
		if (session) {
			signedStatus.set(true);
		}
		window.addEventListener('resize', () => {
			const width = document.body.clientWidth;
			if (width >= 768) {
				const dropdown = document.querySelector('.dropdown');
				dropdown.classList.toggle('hidden');
  			dropdown.classList.toggle('block');
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
	<div class="hidden md:hidden dropdown absolute top-20 bg-cafe-header dark:bg-gwen-header ml-0">
		<a href="/" class="flex text-4xl font-bold">
			Seamstress
			<img src="gwen.png" alt="gwen" loading="lazy" width="48" height="48" />
		</a>
		<a href="/about">About</a>
	</div>
	<div class="flex flex-between items-center gap-4 mr-4">
		{#if $signedStatus}
			<a class="mx-4" href={`${signedStatus ? '/scissors' : '/'}`}>✂️ Your Links ✂️</a>
		{/if}
		{#if $signedStatus}
			<button
				class="w-max px-6 h-12 text-black text-sm leading-4 font-bold rounded-3xl bg-cafe-bright dark:bg-gwen-bright"
				on:click={async () => await signout()}>Log Out</button
			>
		{:else}
			<button
				on:click={async () => await signInWithGitHub()}
				type="button"
				class="w-max px-6 h-12 text-black text-sm leading-4 font-bold rounded-3xl bg-cafe-bright dark:bg-gwen-bright mx-4"
				><p>Sign In</p></button
			>
		{/if}
	</div>
</header>

<style>
	@media (min-width: 768px) {
		.dropdown {
			display: none;
		}
	}
</style>
