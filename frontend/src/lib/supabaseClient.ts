// import { createClient } from '@supabase/supabase-js'

// // These variables come from your .env file
// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL!
// const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY!

// // This client will be used for Login, Signup, and Logout
// export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { 
//   auth: { 
//     persistSession: true, // This keeps the user logged in even if they refresh the page
//     autoRefreshToken: true 
//   } 
// })


import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL!
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY!

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { 
  auth: { persistSession: true } 
})