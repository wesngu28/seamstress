<script>
	import { onMount } from 'svelte';
	import { auth, linksRef } from '../../util/firebase';
	import { signedStatus } from '../../stores/stores';
	import { fetchUrls } from './fetchUrls';
	import { onSnapshot } from 'firebase/firestore';
	let userUrls;
	let item;

	let setupSnapshotSubscription = () => {
		onSnapshot(linksRef, (snapshot) => {
			snapshot.docChanges().forEach((change) => {
				if (change.type === 'removed') {
					userUrls = userUrls.filter((doc) => doc.word !== change.doc.data().word);
				}
			});
		});
	};

	onMount(async () => {
		userUrls = await fetchUrls();
		if (!userUrls[0]) {
			setTimeout(async () => {
				userUrls = await fetchUrls();
				setupSnapshotSubscription();
			}, 2500);
		} else {
			setupSnapshotSubscription();
		}
		return () => setupSnapshotSubscription();
	});
	async function deleter() {
		const user = auth.currentUser;
		const associate = item.getAttribute('data-url');
		await fetch('/api/delete', {
			method: 'DELETE',
			body: JSON.stringify({
				word: associate,
				creator: user && user.uid
			}),
			headers: {
				Accept: 'application/json'
			}
		});
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
					<th class="w-2" />
				</tr>
			</thead>
			<tbody class="truncate gap-4">
				{#each userUrls as userUrl}
					<tr class="truncate relative">
						<td class="hidden tiny:table-cell">
							<p>{userUrl.created_at.substring(0, userUrl.created_at.indexOf(','))}</p>
						</td>
						<td class="w-min truncate">
							<a href={userUrl.original}
								>{userUrl.original.replace('https://', '').replace('http://', '')}</a
							>
						</td>
						<td class="w-min truncate">
							<a href={userUrl.shortened}>{userUrl.word}</a>
						</td>
						<td>
							<p>{userUrl.clicks}</p>
						</td>
						<button
							bind:this={item}
							class="absolute right-5"
							on:click={async (event) => await deleter(event)}
							data-url={userUrl.word}><img src="trash-small.png" alt="trash" /></button
						>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
