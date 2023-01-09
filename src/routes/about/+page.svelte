<script>
	import { onMount } from 'svelte';

	onMount(() => {
		window.addEventListener('resize', () => {
			const image = document.querySelector('.gwens');
			const width = window.innerWidth;
			if (width >= 640) {
				image.src = 'Gwenner.jpg';
			} else {
				image.src = 'Gwenizontal.jpg';
			}
		});
	});
</script>

<div class="flex flex-auto justify-center items-center">
	<div class="flex flex-col items-center lg:place-items-center w-full lg:grid lg:grid-cols-2">
		<div class="h-[480px] sm:h-auto w-auto">
			<img class="gwens h-[480px] sm:h-auto sm:p-8" src="Gwenner.jpg" alt="Gwen" />
		</div>
		<div class="w-max sm:w-auto flex flex-col items-center mt-10">
			<h2 class="text-cafe-pink dark:text-periwinkle-blue-200 font-bold text-3xl">Why</h2>
			<p class="my-4 max-w-xs sm:max-w-lg text-cafe-orange dark:text-neon-blue-300">
				Now that I have started to apply for jobs, my need for a url shortener is more than ever. I
				track all the links in a Markdown table, and it is a pain to have some application portals
				overflow my grid with the longest possible url known to man.
			</p>
			<p class="my-4 max-w-xs sm:max-w-lg text-cafe-orange dark:text-neon-blue-300">
				I could have used an online solution or an API to shorten my urls, but where is the fun in
				that? Needing anything now online could be a new learning experience for me, and through
				making this, I used a backend as a service for the first time (Supabase), and I can
				definitely see the appeal.
			</p>
		</div>
	</div>
</div>
