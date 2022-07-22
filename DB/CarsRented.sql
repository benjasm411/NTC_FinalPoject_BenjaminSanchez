use car_rent;

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
   
insert into cars_rented (rent_number, user_id, car_id, date_from, date_to, final_price) values
	("XXAAADDD22",
	 1,
     20,
     '2020-03-25',
     '2022-05-01',
     25000.00
    );
update cars set available = false where car_id = 20;
    
insert into cars_rented (rent_number, user_id, car_id, date_from, date_to, final_price) values
	("XXABADDC22",
	 2,
     30,
     '2022-04-25',
     '2022-05-01',
     55000.00
    );
    update cars set available = false where car_id = 30;

    
    insert into cars_rented (rent_number, user_id, car_id, date_from, date_to, final_price) values
	("XXABAGDC22",
	 2,
     32,
     '2022-06-25',
     '2022-07-01',
     8000.00
    );
	update cars set available = false where car_id = 32;

    
    select * from cars_rented;
    drop table cars_rented;
    