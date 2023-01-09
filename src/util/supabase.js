import { createClient } from '@supabase/supabase-js';
import { signedStatus } from '../stores/stores';

const supabaseUrl = 'https://qapykcdprhrersuvogia.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcHlrY2RwcmhyZXJzdXZvZ2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMDAwOTEsImV4cCI6MTk4ODU3NjA5MX0.Es1E9aRFK_UIQqLWIwQIGezxvFhdWWeI8CqlofejwEE';
export const publicSuperbase = createClient(supabaseUrl, supabaseKey);

publicSuperbase.auth.onAuthStateChange((event, session) => {
	if (event == 'SIGNED_IN') signedStatus.set(true);
	if (event == 'SIGNED_OUT') signedStatus.set(false);
});

export async function signInWithGitHub() {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'github'
	});
}

export async function signout() {
	const { error } = await supabase.auth.signOut();
}
