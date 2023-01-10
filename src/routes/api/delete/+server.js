import { json } from '@sveltejs/kit';
import { supabase } from '../supabase';

export async function DELETE({ request }) {
	const body = await request.json();
	let result = 'Failed to remove, you do not have permission.'
	if (body.creator !== null) {
		const { data, error } = await supabase
			.from('Links')
			.delete()
			.eq('word', body.word)
			.eq('creator', body.creator)
			.select()
		if (data[0]) {
			result = `${body.word} removed from your links.`
		}
	}
	return json({ status: result });
}
