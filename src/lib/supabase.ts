import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const secretKey = process.env.SUPABASE_SECRET_KEY!;

// Cliente com a chave secreta — use apenas em API Routes (servidor)
export const supabaseAdmin = createClient(url, secretKey);
