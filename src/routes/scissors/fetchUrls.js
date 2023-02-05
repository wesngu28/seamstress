import { getDocs, query, where } from "firebase/firestore/lite";
import { linksRef } from "../../util/firebase";

export async function fetchUrls() {
		const findLink = query(linksRef, where('creator', '==', usa));
		const querySnapshot = await getDocs(findLink);
		const userLinks = []
		querySnapshot.forEach((link) => {
			console.log(link.data())
			userLinks.push(link.data())
		});
		return userLinks;

}
