import { json } from '@sveltejs/kit';
import { deleteDoc, doc, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { db, linksRef } from '../../../util/firebase';

export async function DELETE({ request }) {
	const body = await request.json();
	let result = 'Failed to remove, you do not have permission.';
	if (body.creator !== null) {
		const findLink = query(
			linksRef,
			where('word', '==', body.word),
			where('creator', '==', body.creator),
		);
		const querySnapshot = await getDocs(findLink);
		querySnapshot.forEach((link) => {
			const targetDoc = doc(db, 'links', link.id);
			deleteDoc(targetDoc);
			result = `${body.word} removed from your links.`;
		});
	}
	return json({ status: result });
}
