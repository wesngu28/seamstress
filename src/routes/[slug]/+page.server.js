import { redirect } from '@sveltejs/kit';
import { doc, getDocs, query, updateDoc, where } from 'firebase/firestore/lite';
import { db, linksRef } from '../../util/firebase';

export async function load({ params }) {
	const findLink = query(linksRef, where('word', '==', params.slug));
	const querySnapshot = await getDocs(findLink);
	querySnapshot.forEach((document) => {
		const targetDoc = doc(db, 'links', document.id);
		updateDoc(targetDoc, { clicks: document.data().clicks + 1 });
		throw redirect(302, document.data().original);
	});
}
