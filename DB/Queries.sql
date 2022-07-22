use car_rent;
-- Select all aviable cars
select * from cars where available = true;

-- Select all aviable cars and aviable since a certain date
select c.*, cr.date_to from cars c left join cars_rented cr on cr.car_id = c.car_id where (cr.date_to < '2022-05-15' or c.available = true) and c.color = "grey" order by c.price;

-- info after rented
select c.*, cr.rent_number from cars c left join cars_rented cr on cr.car_id = c.car_id where c.car_id = 20;
