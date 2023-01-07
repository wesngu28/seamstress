<script>
	let url;
	let resultant = 'Wambo Test';
	import { createClient } from '@supabase/supabase-js';
	import Result from './Result.svelte';
	const supabaseUrl = 'https://qapykcdprhrersuvogia.supabase.co';
	const supabaseKey =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcHlrY2RwcmhyZXJzdXZvZ2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMDAwOTEsImV4cCI6MTk4ODU3NjA5MX0.Es1E9aRFK_UIQqLWIwQIGezxvFhdWWeI8CqlofejwEE';
	const supabase = createClient(supabaseUrl, supabaseKey);
	async function add() {
		const base = 'localhost:5173';
		const re =
			/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
		if (re.test(url)) {
			let { data: snippedAlr, error: saError } = await supabase
				.from('Links')
				.select('shortened')
				.or(`original.eq.${url}`, `shortened.eq.${url}`);
			if (snippedAlr) {
				if (snippedAlr.length > 0) return json(snippedAlr);
			}
			const req = await fetch('/api/');
			const json = await req.json();
			const randomWord = json.path;
			resultant = `${base}/${randomWord}`;
			const { data, error } = await supabase
				.from('Links')
				.insert([{ original: url, shortened: resultant }])
				.select();
		}
	}
</script>

<div class="flex flex-col items-center w-full">
	<input
		class="text-white border w-[28rem] h-12 px-6 leading-6 rounded-[2rem] mb-4 bg-gwen-splash"
		type="string"
		bind:value={url}
		placeholder="Enter a link"
	/>
	<button
		class="w-max px-6 h-12 text-sm leading-4 font-bold rounded-3xl bg-gwen-bright"
		on:click={add}>{resultant ? 'Snip Another' : 'Snip'}</button
	>
	<div class="w-[28rem] bg-gwen-splash bg-bottom p-4 flex-col my-4 text-white">
		<div class="flex justify-between">
      <p>Your shortened url is: SHORTENED</p>
      <p class="text-right">Copy</p>
    </div>
		<div class="flex justify-between w-full">
			<p>Clicked 5 times</p>
			<p>Created at this date</p>
		</div>
	</div>
</div>
