--select*from  film inner join language on film.language_id=language.language_id  where(title='Chamber Italian');
--update   film  set language_id = 2  where(title='Chamber Italian');
--select*from  address 
--drop table customer_review
--select * from rental where (return_date is null)
--select inventory.film_id, film.title,film.replacement_cost  from inventory inner join film on inventory.film_id=film.film_id;
 --select * from rental inner join inventory on rental.inventory_id=inventory.inventory_id LEFT join film on inventory.film_id= film.film_id
 --where rental.return_date IS null
-- order by film.replacement_cost DESC limit 30
-- select * from actor where (first_name ='Penelope'and  last_name= 'Monroe')

--select* from film_actor
--inner  join film on film.film_id=film_actor.film_id where (actor_id=(
--select actor_id from actor where (first_name='Penelope'and  last_name= 'Monroe' ) ))

--select  film.film_id, film.title,film.fulltext from film_actor
 --inner  join film on film.film_id=film_actor.film_id 
 --where  (actor_id=(
	-- select actor_id from actor where (first_name='Penelope'and  last_name= 'Monroe')
-- and  film.fulltext @@ to_tsquery('english', 'sumo') )) 

--select * from film
--inner join film_category on film.film_id=film_category.film_id
--inner join category on  category.category_id=film_category.category_id
--where length <60 and rating='R' and category.name='Documentary'

--select * from inventory
--inner join film on film.film_id=inventory.film_id
--inner join rental  on    rental.inventory_id=inventory.inventory_id
--inner join customer on customer.customer_id=rental.customer_id
--where customer.first_name='Matthew' and customer.last_name='Mahan' and film.rental_rate > 4
--and rental.return_date > '2005-07-28'
--and rental.return_date < '2005-08-01'

 select * from inventory
 inner join film on film.film_id=inventory.film_id
 inner join rental  on    rental.inventory_id=inventory.inventory_id
 inner join customer on customer.customer_id=rental.customer_id 
 where customer.first_name='Matthew' and customer.last_name='Mahan'
 and (film.title ILIKE '%boat%' or film.description ILIKE '%boat%')
 order by film.replacement_cost DESC
 limit 1