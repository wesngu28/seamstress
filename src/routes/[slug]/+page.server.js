import { createClient } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const supabaseUrl = 'https://qapykcdprhrersuvogia.supabase.co';
	const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcHlrY2RwcmhyZXJzdXZvZ2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMDAwOTEsImV4cCI6MTk4ODU3NjA5MX0.Es1E9aRFK_UIQqLWIwQIGezxvFhdWWeI8CqlofejwEE"
	const supabase = createClient(supabaseUrl, supabaseKey);
  let { data: isSnipped, error: iserror } = await supabase.from('Links').select('original').eq('shortened', `localhost:5173/${params.slug}`);
  if (isSnipped) {
    if (isSnipped.length > 0) {
      throw redirect(302, isSnipped[0].original)
    }
  }

}