<script>
	import { onMount } from 'svelte';
	import { PUBLIC_SITE } from '$env/static/public';
	let userUrls;
	import { publicSuperbase } from '../../util/supabase';
	import { signedStatus } from '../../stores/stores';
	import { fetchUrls } from './fetchUrls';
	onMount(async () => {
		userUrls = await fetchUrls();
	});
	async function deleter() {
		const { data: session } = await publicSuperbase.auth.getSession();
		const associate = document.querySelector('.deleter').getAttribute('data-url');
		const req = await fetch('/api/delete', {
			method: 'DELETE',
			body: JSON.stringify({
				word: associate,
				creator: session.session && session.session.user.id
			}),
			headers: {
				Accept: 'application/json'
			}
		});
		userUrls = await fetchUrls();
	}
</script>

<svelte:head>
	<title>Your Links</title>
</svelte:head>

<div class="flex justify-center items-center place-items-center w-full flex-col flex-auto">
	{#if userUrls && $signedStatus}
		<h2 class="font-bold text-3xl mb-4 text-cafe-orange dark:text-neon-blue-300">Your Links</h2>
		<table
			class="table-fixed w-[95vw] md:w-[36rem] lg:w-[48rem] text-center bg-cafe-pink dark:bg-periwinkle-blue-200 rounded-3xl border-separate border-spacing-2 border py-4"
		>
			<thead class="p-4">
				<tr>
					<th class="hidden tiny:table-cell">Created</th>
					<th>Original</th>
					<th>Snipped</th>
					<th>Clicks</th>
					<th class="w-2"></th>
				</tr>
			</thead>
			<tbody class="truncate gap-4">
				{#each userUrls as userUrl}
					<tr class="truncate relative">
						<td class="hidden tiny:table-cell">
							<p>{userUrl.created_at.substring(0, 10)}</p>

						</td>
						<td class="w-min truncate">
							<a href={userUrl.original}
								>{userUrl.original.replace('https://', '').replace('http://', '')}</a
							>
						</td>
						<td class="w-min truncate">
							<a href={`${PUBLIC_SITE}/${userUrl.word}`}>{userUrl.word}</a>
						</td>
						<td>
							<p>{userUrl.clicks}</p>
						</td>
						<button class="deleter absolute right-5" on:click={deleter} data-url={userUrl.word}
						><img src="trash-small.png" alt="trash"/></button>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
