import { redirect } from "@sveltejs/kit";
import { supabase } from "../api/supabase";

export async function load({ params }) {
  let { data: isSnipped, error: iserror } = await supabase.from('Links').select().eq('word', params.slug);
  await supabase.from('Links').update({clicks: isSnipped[0].clicks + 1}).eq('word', isSnipped[0].word)
  if (isSnipped) {
    if (isSnipped.length > 0) {
      throw redirect(302, isSnipped[0].original)
    }
  }
}