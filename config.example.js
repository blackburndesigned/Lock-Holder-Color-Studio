/**
 * Hosted Color Composer config (for customers).
 *
 * 1. Copy this file to config.js (same folder as index.html)
 * 2. Paste your Supabase Project URL + anon public key
 * 3. Deploy the folder (Netlify, Cloudflare Pages, etc.)
 * 4. Do NOT commit config.js with real keys to a public repo if avoidable
 *
 * Customers never type these. They only open your website and click Submit Order.
 */
window.CC_CONFIG = {
  supabaseUrl: "https://YOUR_PROJECT_REF.supabase.co",
  supabaseAnonKey: "YOUR_ANON_PUBLIC_KEY",
  // Optional: always show Download Order JSON (or use ?shop=1 in the URL)
  showShopTools: false,
};
