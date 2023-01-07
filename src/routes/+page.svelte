<script>
	let url;
	let resultant;
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import Hero from "../components/Hero.svelte";
	import Input from "../components/Input.svelte";
  import { createClient } from '@supabase/supabase-js';
	const supabaseUrl = 'https://qapykcdprhrersuvogia.supabase.co';
	const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcHlrY2RwcmhyZXJzdXZvZ2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMDAwOTEsImV4cCI6MTk4ODU3NjA5MX0.Es1E9aRFK_UIQqLWIwQIGezxvFhdWWeI8CqlofejwEE"
	const supabase = createClient(supabaseUrl, supabaseKey);
	async function add() {
    const base = "localhost:5173"
		const re = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i
		if(re.test(url)) {
		  let { data: snippedAlr, error: saError } = await supabase
			  .from('Links')
			  .select('shortened')
			  .or(`original.eq.${url}`, `shortened.eq.${url}`);
		  if (snippedAlr) {
			  if (snippedAlr.length > 0) return json(snippedAlr);
		  }
		  const req = await fetch('/api/')
      const json = await req.json()
      const randomWord = json.path;
		  resultant = `${base}/${randomWord}`;
		  const { data, error } = await supabase
			  .from('Links')
			  .insert([{ original: url, shortened: resultant }])
			  .select();
		}
	}
</script>

<Header />
<div class="flex justify-center items-center w-full flex-col flex-auto">
	<div class="grid grid-rows-fourth-half h-full w-full place-items-center">
		<Hero />
		<Input />
	</div>
</div>
<Footer />