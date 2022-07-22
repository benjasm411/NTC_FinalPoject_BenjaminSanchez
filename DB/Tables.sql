use car_rent;
-- /////////////////////////// Cars Table ////////////////////////////////
create table cars(
	car_id int auto_increment,
    plate char(6) not null unique,
    brand varchar(20) not null,
    seats int not null,
    color varchar(20) not null,
    electric boolean not null,
    manual boolean not null,
    available boolean not null,
    price decimal(15,2) not null,
    primary key (car_id));
-- //////////////////////////////////////// Users //////////////////////////////////////
create table users(
	user_id int auto_increment,
    user_name varchar(255) unique,
    name varchar(255) not null,
    user_password varchar(20),
    primary key(user_id));
-- //////////////////////////////////// Cars Rented ///////////////////////////////////////
create table cars_rented(
	rent_id int not null auto_increment,
    rent_number char(10) unique,
    user_id int,
    -- user_name varchar (20),
    car_id int,
    date_from date not null,
    date_to date not null,
    final_price double (15,2) not null,
    primary key (rent_id),
    foreign key (car_id) references cars(car_id),
    foreign key(user_id) references users(user_id)
    );
    