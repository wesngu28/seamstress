import { getDocs, query, where } from "firebase/firestore/lite";
import { auth, linksRef } from "../../util/firebase";

export async function fetchUrls() {
		const user = auth.currentUser
		const findLink = query(linksRef, where('creator', '==', user.uid));
		const querySnapshot = await getDocs(findLink);
		const userLinks = []
		querySnapshot.forEach((link) => {
			userLinks.push(link.data())
		});
		return userLinks;

}
