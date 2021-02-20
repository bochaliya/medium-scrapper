create database medium_data;
\c medium_data
create table tag_history(device_id text, tag text);
create table articles(creator text not null, title text not null, details text, content text, tags jsonb, response text);