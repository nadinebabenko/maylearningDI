--select * from language
--select  title, description, film.description, language.name from film left join language on film.language_id=language.language_id;
--select language.name, film.title,film.description  from film left join language on film.language_id=language.language_id;
--create table new_film(
--id SERIAL PRIMARY KEY,
--name VARCHAR(100))
--	INSERT INTO new_film (name) 
--	values('Harry Potter'), ('The gone with the winds'),('Hatiko');
--create table customer_review(
--review_id serial  primary key not null,
--film_id int not null,
--language_id int not null,
	--title VARCHAR (100) NOT NULL,
	--SCORE INT NOT NULL,
	--review_text text,
--	last_update timestamp,default current_timestap
--constraint 	 fk_language_id foreign key (language_id) references language(language_id),
--constraint fk_film_id foreign key (film_id) references new_film(id) on delete cascade  on update cascade, 
--constraint score_value check (score > 0 and score <= 10 )
--) 
--select * from new_film
--insert into  customer_review(film_id,language_id, title,score, review_text) values(1,1,'1+1',10,'Just a good film for a special mood'),
--(3,2,'Mr.Nobody',9,'very futuristic movie') returning *
--delete from  new_film where id=2 returning*
select * from customer_review