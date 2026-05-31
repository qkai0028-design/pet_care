create extension if not exists pgcrypto;

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null check (char_length(trim(customer_name)) between 1 and 80),
  phone text not null check (char_length(trim(phone)) between 5 and 32),
  service text not null check (service in ('轻柔净洗', '全套洗护', '修剪造型', '猫咪护理')),
  status text not null default 'new' check (status in ('new', 'confirmed', 'cancelled', 'completed')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists appointments_created_at_idx on public.appointments (created_at desc);
create index if not exists appointments_status_idx on public.appointments (status);

alter table public.appointments enable row level security;
