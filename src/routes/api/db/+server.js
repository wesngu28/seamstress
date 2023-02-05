import { json } from '@sveltejs/kit';
import { nanoid } from 'nanoid';
import { PUBLIC_SITE } from '$env/static/public';
import { db } from '../../../util/firebase';
import { doc, setDoc } from 'firebase/firestore';

export async function POST({ request }) {
	let insertedValue = '';
	const body = await request.json();

	const words = await fetch(
		'https://raw.githubusercontent.com/wesngu28/seamstress/main/files/english.txt'
	);
	const englishWords = await words.text();
	const englishWordArr = englishWords.split('\n');
	insertedValue = englishWordArr[Math.floor(Math.random() * englishWordArr.length)];
	try {
		await setDoc(doc(db, 'links', `${insertedValue}_gwen`), {
			original: body.original,
			shortened: `${PUBLIC_SITE}${insertedValue}_gwen`,
			created_at: new Date(Date.now()).toLocaleString(),
			word: `${insertedValue}_gwen`,
			creator: body.creator && body.creator,
			clicks: 0
		});
	} catch (err) {
		insertedValue = nanoid();
		await setDoc(doc(db, 'links', `${insertedValue}_gwen`), {
			original: body.original,
			shortened: `${PUBLIC_SITE}${insertedValue}_gwen`,
			word: `${insertedValue}_gwen`,
			created_at: new Date(Date.now()).toLocaleString(),
			creator: body.creator && body.creator,
			clicks: 0
		});
	}
	return json({ path: `${PUBLIC_SITE}${insertedValue}_gwen` });
}
