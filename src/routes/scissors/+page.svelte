<script>
	import { onMount } from 'svelte';
	import { PUBLIC_SITE } from '$env/static/public';
	let userUrls;
	import { publicSuperbase } from '../../util/supabase';
	onMount(async () => {
		const { data: session, error: sessionerror } = await publicSuperbase.auth.getSession();
		if (session.session) {
			let { data: userLinks, error: saError } = await publicSuperbase
				.from('Links')
				.select()
				.eq('creator', session.session.user.id);
			userUrls = userLinks.map((link) => link);
		}
	});
</script>

<svelte:head>
	<title>Your Links</title>
</svelte:head>

<div class="flex justify-center items-center place-items-center w-full flex-col flex-auto">
	{#if userUrls}
		<h2 class="font-bold text-3xl mb-4 text-cafe-orange dark:text-neon-blue-300">Your Links</h2>
		<table
			class="table-fixed w-[95vw] md:w-[36rem] lg:w-[48rem] text-center bg-cafe-pink dark:bg-periwinkle-blue-200 rounded-3xl border-separate border-spacing-2 border"
		>
			<thead class="p-4">
				<tr>
					<th class="hidden tiny:table-cell">Created</th>
					<th>Original</th>
					<th>Snipped</th>
					<th>Clicks</th>
				</tr>
			</thead>
			<tbody class="truncate gap-4">
				{#each userUrls as userUrl}
					<tr class="truncate">
						<td class="hidden tiny:table-cell">
							<p>{userUrl.created_at.substring(0, 10)}</p>
						</td>
						<td class="w-min truncate">
							<a href={userUrl.original}
								>{userUrl.original.replace('https://', '').replace('http://', '')}</a
							>
						</td>
						<td>
							<a href={`${PUBLIC_SITE}/${userUrl.word}`}>{userUrl.word}</a>
						</td>
						<td>
							<p>{userUrl.clicks}</p>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
