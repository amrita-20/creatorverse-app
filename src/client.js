import { creatClient, createClient } from '@supabase/supabase-js';

const URL = 'https://oscbhmawnehncrilxxkv.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zY2JobWF3bmVobmNyaWx4eGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2MTI2MjgsImV4cCI6MjAzOTE4ODYyOH0.f6BpgK9oaEpmXlWkxb0ypaHABl1znv9tbcaifDHdFv8';

export const supabase = createClient(URL, API_KEY);