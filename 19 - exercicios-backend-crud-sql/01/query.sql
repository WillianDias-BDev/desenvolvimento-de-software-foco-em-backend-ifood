create database exercicio_crud_sql;

create table usuarios (
  id serial,
  nome text not null,
  idade smallint,
  email varchar (50),
  senha varchar(8) not null
);

insert into usuarios
(nome, idade, email, senha)
values

('Aretha Mongomery', 30, 'augue.id.ante@odioAliquam.com','a0B13O3L'),
('Camden H. Bartlett', 15, 'turpis.vitae.purus@risusDuisa.ca','p3P96F3Q'),
('Raja W. Coffey', 30, 'raja.feugiat@nonummy.com','s5F51T7L'),
('Elton D. Olsen',29, 'auctor@duiFuscediam.edu','k5X25B0R'),
('Shelley E. Frederick',20,'raja.feugiat@nonummy.com','u2D18F6E')

update usuarios
set
nome = 'Raja W. Coffey Thomas'
where id = 3;

update usuarios
set
email = null
where id = 6;

alter table usuarios add constraint email_unique_usuarios unique(email);

insert into usuarios
(nome, idade, email, senha)
values

('Jermaine G. Sellers',16,'ligula.Nullam@tortordictum.co.uk','o2P56U9U'),
('James D. Kennedy',23,'amet@Nulladignissim.com','q6B78V3V'),
('Amelia S. Harris',29,'nec.metus.facilisis@vitaealiquet.edu','l4S64Y3A'),
('Joel M. Hartman',18,'montes.nascetur@odiotristique.co.uk','c4Q27D7O'),
('Elmo K. Greer',18,'risus.Duis@eget.ca','e3P92I7R')

alter table usuarios add column situacao boolean default true;

update usuarios
set
situacao = true
where id = 9;

update usuarios
set
senha = 'k9P31H1O'
where id = 10;

alter table usuarios drop column idade, add column data_nascimento date;

update usuarios
set
data_nascimento = '1991-09-29'
where id = 4;

update usuarios
set
data_nascimento = '1988-11-02'
where id = 8;

alter table usuarios alter column data_nascimento set not null;

delete from
usuarios
where 
data_nascimento is null;

insert into usuarios
(nome, data_nascimento, email, senha)
values

('Tate I. Dean','1989-05-01','Nunc@etmagnis.edu','d3V25D6Y'),
('Arsenio K. Harmon','1985-10-23','adipiscing.elit@turpis.com','m3T58S0C')