<script>
	import { publicSuperbase } from '../util/supabase';
	let url;
	let resultant = '';
	import Result from './Result.svelte';
	async function add() {
		const re =
			/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
		if (re.test(url)) {
			let { data: snippedAlr, error: saError } = await publicSuperbase
				.from('Links')
				.select('shortened')
				.eq('shortened', url);
			if (snippedAlr && snippedAlr.length > 0) {
				resultant = 'Are you sure this is not a snipped route already?'
			} else {
				const { data: session } = await publicSuperbase.auth.getSession()
				const req = await fetch('/api/db', {
						method: 'POST',
						body: JSON.stringify({
							original: url,
							creator: session.session && session.session.user.id
						}),
						headers: {
							Accept: 'application/json'
						}
					});
				const json = await req.json();
				resultant = json.path;
			}
		}
	}
</script>

<div class="flex flex-col items-center w-full">
	<input
		class="bg-right dark:bg-center text-white border-black shadow border w-[28rem] h-12 px-6 leading-6 rounded-[2rem] mb-4 bg-cafe-splash dark:bg-gwen-splash"
		type="string"
		bind:value={url}
		placeholder="Enter a link"
	/>
	<button
		type="submit"
		class="w-max px-6 h-12 text-black text-sm leading-4 font-bold rounded-3xl bg-cafe-bright dark:bg-gwen-bright"
		on:click={add}>{'Snip'}</button
	>
	<Result {resultant} />
</div>
