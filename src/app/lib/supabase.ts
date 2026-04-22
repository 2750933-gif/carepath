import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://fkuezomouwamqiiwcrz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrdWV6b21vdXdhbXFpaXZlY3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NDc5MjYsImV4cCI6MjA5MjMyMzkyNn0.4GzwhAv2dAsHeTp6SW-NzJuG66GH9Hb-vjAqLc5NpvI'
)