<script>
	import { onMount } from 'svelte';
  import { signedStatus } from '../stores/stores'
	import { publicSuperbase, signInWithGitHub, signout } from '../util/supabase';

  onMount(async () => {
    const { data: session, error: sessionerror } = await publicSuperbase.auth.getSession()
    if (session) {
      signedStatus.set(true)
    }
  })
</script>

<header
	class="w-full h-24 flex justify-between p-4 mx-2 bg-gwen-header text-neon-blue-300 items-center flex-initial"
>
	<a href="/" class="flex items-center justify-center gap-2 text-4xl font-bold">
		Seamstress
		<img src="gwen.png" alt="gwen" loading="lazy" width="48" height="48" />
	</a>
	<div class="flex flex-between">
		<a class={`mx-4 ${signedStatus ? 'opacity-100' : 'opacity-25'}`} href={`${signedStatus ? '/scissors' : '/'}`}>Your Links</a>
    {#if $signedStatus}
		<button on:click={async () => await signout()}>wungus bungus</button>
    {:else}
    <button on:click={async () => await signInWithGitHub()} type="button" class="mx-4 px-6"
			><p>Sign In</p></button
		>
    {/if}
	</div>
</header>
