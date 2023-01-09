import { SUPABASE_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qapykcdprhrersuvogia.supabase.co';

export const supabase = createClient(supabaseUrl, SUPABASE_KEY);
