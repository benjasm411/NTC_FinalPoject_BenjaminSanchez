use car_rent;
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
    
    -- -------------------Adding some cars---------------------------
    -- image 1
    insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("AC65F5",
               "suzuki",
               7,
               "red",
               true,
               true,
               true,
               5500.00);
	-- image 2
	insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("XD88R4",
               "suzuki",
               5,
               "black",
               false,
               true,
               true,
               6000.00);
    -- image 3
    insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("FG44Y6",
               "suzuki",
               7,
               "white",
               true,
               false,
               true,
               8200.00);
	-- image 4               
    insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("KF65D4",
               "suzuki",
               6,
               "blue",
               false,
               false,
               true,
               7200.00);           
               
    -- image 5
    insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("TT25M2",
               "suzuki",
               5,
               "orange",
               true,
               true,
               true,
               4800.00);           
-- image 6
 insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("YE45T6",
               "toyota",
               5,
               "grey",
               true,
               false,
               true,
               5800.00); 
               
-- image 7
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("WR43T5",
               "toyota",
               4,
               "red",
               true,
               true,
               true,
               3800.00); 
-- image 8			
 insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("LA24F4",
               "toyota",
               5,
               "grey",
               true,
               false,
               true,
               5800.00); 
-- image 9 
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("SW19N2",
               "toyota",
               12,
               "white",
               false,
               false,
               true,
               10500.00); 
-- image 10
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("WS91F5",
               "toyota",
               5,
               "blue",
               false,
               true,
               true,
               7500.00); 
-- image 11
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("PA02W5",
               "chevrolet",
               4,
               "blue",
               false,
               false,
               true,
               4500.00);  
-- image 12
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("HC05S8",
               "chevrolet",
               4,
               "grey",
               false,
               false,
               true,
               5100.00);    
-- image 13
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("MR27F9",
               "chevrolet",
               5,
               "grey",
               false,
               false,
               true,
               5100.00);
-- image 14
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("CI09S5",
               "chevrolet",
               5,
               "red",
               false,
               false,
               true,
               8700.00);               
-- image 15
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("HI07S5",
               "chevrolet",
               4,
               "orange",
               false,
               false,
               true,
               10300.00);	
-- image 16               
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("GG09S8",
               "ford",
               5,
               "orange",
               false,
               false,
               true,
               9700.00);
-- image 17
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("RN09G9",
               "ford",
               5,
               "black",
               false,
               false,
               true,
               6700.00);  
-- image 18
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("MF18F8",
               "ford",
               4,
               "black",
               false,
               false,
               true,
               6700.00);  
-- image 19
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("PT05S6",
               "ford",
               17,
               "grey",
               false,
               false,
               true,
               15800.00);               
-- image 20
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("GP12C2",
               "ford",
               4,
               "grey",
               false,
               false,
               true,
               8800.00); 
-- image 21
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("VW41P3",
               "volkswagen",
               5,
               "grey",
               false,
               true,
               true,
               3500.00); 
-- image 22
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("IA45R2",
               "volkswagen",
               7,
               "yellow",
               true,
               false,
               true,
               6500.00);                
-- image 23
insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("FM19V9",
               "volkswagen",
               5,
               "red",
               true,
               true,
               true,
               6500.00);  
-- image 24               
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("NS58T2",
               "nissan",
               6,
               "orange",
               true,
               false,
               true,
               8000.00);  
-- image 25               
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("PP05F5",
               "nissan",
               4,
               "red",
               false,
               false,
               true,
               5300.00);   
-- image 26               
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("SA48S4",
               "nissan",
               6,
               "red",
               true,
               false,
               true,
               6600.00); 
-- image 27               
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("RT90S4",
               "nissan",
               5,
               "blue",
               false,
               false,
               true,
               6600.00);     
-- image 27               
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("RS90S4",
               "nissan",
               5,
               "blue",
               false,
               false,
               true,
               6600.00);   
-- image 28               
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("DT22F4",
               "nissan",
               4,
               "orange",
               false,
               true,
               true,
               9300.00);  
-- image 29               
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("AN53S3",
               "nissan",
               5,
               "orange",
               false,
               true,
               true,
               5200.00);      
-- image 30              
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("GS43B7",
               "nissan",
               5,
               "red",
               false,
               false,
               true,
               8100.00);  
-- image 31              
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("SS44F8",
               "bmw",
               4,
               "white",
               true,
               false,
               true,
               9500.00);                               
-- image 32              
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("TI45M0",
               "bmw",
               6,
               "blue",
               true,
               true,
               true,
               10100.00);
-- image 33              
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("SD44T5",
               "bmw",
               5,
               "grey",
               true,
               true,
               true,
               8500.00);   
-- image 34              
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("SI45W1",
               "bmw",
               6,
               "black",
               true,
               false,
               true,
               9900.00);  
-- image 35              
  insert into cars (plate, brand, seats, color, electric, manual, available, price)
		values ("AS84H5",
               "bmw",
               5,
               "red",
               false,
               true,
               true,
               10900.00);               
               
 select * from cars;
 drop table cars;
