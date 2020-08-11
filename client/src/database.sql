CREATE TABLE users (
   id bigserial primary key,
   username varchar(255) null,
   email varchar(255) null,
   password varchar(255) null,
   passwordConfirmation varchar(255) null,
   timezone varchar(255) null,
   chkbStatus boolean
)

insert into users (username,email,password,passwordConfirmation,timezone,chkbStatus) 
values ('vanbui','van.bt.38@gmail.com','1222','1222','Pacific/Pago_Pago',true)

DROP TABLE users;