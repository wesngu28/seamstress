import { publicSuperbase } from "../../util/supabase"

export async function fetchUrls() {
	const { data: session, error: sessionerror } = await publicSuperbase.auth.getSession();
	if (session.session) {
		let { data: userLinks, error: saError } = await publicSuperbase
			.from('Links')
			.select()
			.eq('creator', session.session.user.id);
		return userLinks.map((link) => link);
	}
}
