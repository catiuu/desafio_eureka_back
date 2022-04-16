CREATE TABLE ceps (
    id serial primary key,
    zip_code varchar(8),
    address text,
    district text,
    city text,
    uf varchar(2)
);