<script>
	import { signedStatus } from '../stores/stores';
	import { signInWithPopup, signOut } from 'firebase/auth';
	import { auth, provider } from '../util/firebase';
</script>

{#if $signedStatus}
	<a class="mx-4" href={`${signedStatus ? '/scissors' : '/'}`}>Your Links</a>
{/if}
{#if $signedStatus}
	<button
		class="w-max px-6 h-12 text-black text-sm leading-4 font-bold rounded-3xl bg-cafe-bright dark:bg-gwen-bright"
		on:click={async () => signOut(auth)}>Log Out</button
	>
{:else}
	<button
		on:click={async () => signInWithPopup(auth, provider)}
		type="button"
		class="w-max px-6 h-12 text-black text-sm leading-4 font-bold rounded-3xl bg-cafe-bright dark:bg-gwen-bright mx-4"
		><p>Sign In</p></button
	>
{/if}
