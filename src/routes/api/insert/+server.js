import { supabase } from "../supabase";

export async function POST({ request }) {
	const body = await request.json();
	const { data, error } = await supabase
		.from('Links')
		.insert([
			{
				original: body.original,
				shortened: body.shortened,
				word: body.word,
				creator: body.creator
			}
		]);

  return new Response(200, {'Success': 'Inserted link record'})
}
