<script>
	import { mode } from '../stores/stores';
	import Input from './Input.svelte';

	function opacityChange() {
		if ($mode === 'light') {
			mode.set('dark');
			document.body.classList.add('dark');
		} else {
			mode.set('light');
			document.body.classList.remove('dark');
		}
	}
</script>

<div
	class="mb-24 text-cafe-orange dark:text-neon-blue-300 flex flex-col lg:flex-row items-center justify-center gap-6"
>
	<div class="text-center m-4">
		<h2 class="flex items-center justify-center gap-2 text-4xl tiny:text-5xl font-bold">
			Seamstress
			<img src="gwen.png" alt="gwen" loading="lazy" width="64" height="64" />
		</h2>
		<p class="pt-4 text-2xl mb-16">
			Shorten those <span class="text-cafe-bright dark:text-gwen-bright">long, unsightly urls</span>
			nobody wants to see. Snip snip!
		</p>
		<Input />
	</div>
	<div class="flex flex-col m-4">
		<img
			class="w-full h-auto max-w-[700px] p-4 object-contain"
			src={$mode === 'dark' ? 'Gwen_OriginalSkin.jpg' : 'Cafe.jpg'}
			alt="Gwen"
		/>
		<div class="w-full loads flex justify-center">
			<img
				on:click={opacityChange}
				on:keydown={opacityChange}
				class="opacity-25 dark:opacity-100 w-12 h-1/2"
				src="Base_Load.jpg"
				alt="Gwen"
			/>
			<img
				on:click={opacityChange}
				on:keydown={opacityChange}
				class="dark:opacity-25 w-12 h-1/2"
				src="Cafe_Load.jpg"
				alt="Gwen"
			/>
		</div>
	</div>
</div>
