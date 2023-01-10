import { json } from '@sveltejs/kit';
import { nanoid } from 'nanoid';
import { PUBLIC_SITE } from '$env/static/public';
import { supabase } from '../supabase';

export async function POST({ request }) {
	let insertedValue = '';
	const body = await request.json();

	const words = await fetch(
		'https://raw.githubusercontent.com/wesngu28/seamstress/main/files/english.txt'
	);
	const englishWords = await words.text();
	const englishWordArr = englishWords.split('\n');
	insertedValue = englishWordArr[Math.floor(Math.random() * englishWordArr.length)];
	const { data, error } = await supabase.from('Links').insert([
		{
			original: body.original,
			shortened: `${PUBLIC_SITE}${insertedValue}_gwen`,
			word: `${insertedValue}_gwen`,
			creator: body.creator && body.creator
		}
	]);
	if (error) {
		insertedValue = nanoid();
		const { data, error } = await supabase.from('Links').insert([
			{
				original: body.original,
				shortened: `${PUBLIC_SITE}${insertedValue}_gwen`,
				word: `${insertedValue}_gwen`,
				creator: body.creator && body.creator
			}
		]);
	}
	return json({ path: `${PUBLIC_SITE}${insertedValue}_gwen` });
}
