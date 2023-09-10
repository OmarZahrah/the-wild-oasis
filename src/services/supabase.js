import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://olwmzzuaccawiffytaft.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sd216enVhY2Nhd2lmZnl0YWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5Nzc4NDksImV4cCI6MjAwODU1Mzg0OX0.U8U3oUJ0__wMEYLP2Lhp7KTVXmOawYGD0dcQ4epYzTk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
