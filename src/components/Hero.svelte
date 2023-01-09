<script>
	import { mode } from "../stores/stores";
	import Input from "./Input.svelte";

	function opacityChange() {
		if ($mode === 'light') {
			mode.set('dark')
			document.body.classList.add('dark')
		} else {
			mode.set('light')
			document.body.classList.remove('dark')
		}
	}

</script>
<div class="w-[58rem] mb-24 text-cafe-orange dark:text-neon-blue-300 flex items-center justify-center gap-16">
	<div class="text-center">
		<h2 class="flex items-center justify-center gap-2 text-5xl font-bold">
			Seamstress
			<img src="gwen.png" alt="gwen" loading="lazy" width="64" height="64" />
		</h2>
		<p class="pt-4 text-2xl mb-16">Shorten those <span class="text-cafe-bright dark:text-gwen-bright">long, unsightly urls</span> nobody wants to see. Snip snip!</p>
		<Input />
	</div>
	<div class="flex">
		<img class="max-w-[700px]" src={$mode === 'dark' ? 'Gwen_OriginalSkin.jpg' : 'Cafe.jpg'} alt="Gwen"/>
		<div class="w-24 loads">
			<img on:click={opacityChange} class="opacity-25 dark:opacity-100 h-1/2" src="Base_Load.jpg" alt="Gwen"/>
			<img on:click={opacityChange} class="dark:opacity-25 h-1/2" src="Cafe_Load.jpg" alt="Gwen"/>
		</div>
	</div>
</div>
