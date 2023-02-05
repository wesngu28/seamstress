import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore/lite';
import { getAuth, GithubAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { signedStatus } from '../stores/stores';

const firebaseConfig = {
	apiKey: 'AIzaSyDTEWKah6lksSSjgQwbjiCnD9TvTtL7z1M',
	authDomain: 'seamstress-2f121.firebaseapp.com',
	projectId: 'seamstress-2f121',
	storageBucket: 'seamstress-2f121.appspot.com',
	messagingSenderId: '33777480804',
	appId: '1:33777480804:web:201cd7bcca4ddafc75db71'
};

export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const linksRef = collection(db, 'links');
export const provider = new GithubAuthProvider();
export const auth = getAuth();

onAuthStateChanged(auth, (user) => {
	if (user) {
		signedStatus.set(true);
	} else {
		signedStatus.set(false);
	}
});
