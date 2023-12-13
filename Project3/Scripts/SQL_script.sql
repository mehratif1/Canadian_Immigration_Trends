create table if not exists immigration(
"year" int not null,
province varchar(65) not null,
immigrants_count int not null,
id int primary key
);


COPY immigration
FROM '/Users/dariareichkina/Projects/Project3/Resources/Immigration/immigration1.csv' DELIMITER ',' CSV HEADER;

create table if not exists mort_value(
"year" int not null,
geo varchar(65) not null,
value float not null,
id int primary key

);

COPY mort_value
FROM '/Users/dariareichkina/Projects/Project3/Resources/Mortgage/mortgage_value1.csv' DELIMITER ',' CSV HEADER;

create table if not exists avr_house_price(
"date" int not null,
avg_price int not null,
id int primary key

);

COPY avr_house_price
FROM '/Users/dariareichkina/Projects/Project3/Resources/Mortgage/house_price1.csv' DELIMITER ',' CSV HEADER;

create table if not exists income(
REF_DATE int not null,
GEO varchar (65) not null,
VALUE int not null,
id int primary key
);

COPY income
FROM '/Users/dariareichkina/Projects/Project3/Resources/Income/income1.csv' DELIMITER ',' CSV HEADER;


create table if not exists construction(
"Data" int not null,
Province varchar(65) not null,
Centre varchar(65) not null,
Total float not null,
id int primary key,
longtitude float not null,
latitude float not null
);
drop table construction;

copy construction
FROM '/Users/dariareichkina/Projects/Project3/Resources/con6.csv' DELIMITER ',' CSV HEADER;




select * from construction ;

create table if not exists province_menu(
id int primary key,
province varchar(65) not null

);

create table if not exists years_menu(
id int primary key,
"year" varchar(65) not null

);

insert into province_menu (id, province)
values
(1, 'All'),
(2, 'Newfoundland and Labrador'),
(3, 'PEI'),
(4, 'Alberta'),
(5, 'Manitoba'),
(6, 'New Brunswick'),
(7, 'Nova Scotia'),
(8, 'Qubec'),
(9, 'Ontario'),
(10, 'Saskatchewan'),
(11, 'British Columbia');

insert into years_menu (id, "year")
values
(1, 'All'),
(2, '2006'),
(3, '2007'),
(4, '2008'),
(5, '2009'),
(6, '2010'),
(7, '2011'),
(8, '2012'),
(9, '2013'),
(10, '2014'),
(11, '2015'),
(12, '2016'),
(13, '2017'),
(14, '2018'),
(15, '2019'),
(16, '2020'),
(17, '2021'),
(18, '2022');


select * from construction c where c.province = 'Saskatchewan';

select * from province_menu;


update immigration set province  = 'Saskachewan' where province = 'Saskatchewan';
select * from immigration;