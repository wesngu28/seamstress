import { getDocs, query, where } from 'firebase/firestore';
import { auth, linksRef } from '../../util/firebase';

export async function fetchUrls() {
	const user = auth.currentUser;
	const userLinks = [];
	if (user) {
		const findLink = query(linksRef, where('creator', '==', user.uid));
		const querySnapshot = await getDocs(findLink);
		querySnapshot.forEach((link) => {
			userLinks.push(link.data());
		});
	}
	return userLinks;
}
