import { getSupabaseClient } from '@/packages/supabase/client'

export function useSupabase() {
  const supabase = getSupabaseClient()

  return supabase
}
