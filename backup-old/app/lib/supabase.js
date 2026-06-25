import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'wgcoxgiswbbkduurdjgp'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnY294Z2lzd2Jia2R1dXJkamdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNTUwODEsImV4cCI6MjA5MjYzMTA4MX0.BGGP_xi5uqjW-ts2xehAgSyr-JquKpRWsnEd8R5uiu0'

export const supabase = createClient(supabaseUrl, supabaseKey)