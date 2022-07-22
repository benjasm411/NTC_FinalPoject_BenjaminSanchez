use car_rent;

create table users(
	user_id int auto_increment,
    user_name varchar(255) unique,
    name varchar(255) not null,
    user_password varchar(20),
    primary key(user_id));
    
insert into users (name) values ("user_1");
insert into users (name) values ("user_2");
insert into users (name) values ("user_3");

select* from users;