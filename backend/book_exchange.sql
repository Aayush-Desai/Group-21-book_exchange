set search_path to "book_exchange";

CREATE TABLE "book_exchange".USERS(
	EMAIL VARCHAR PRIMARY KEY,
	PASSWORD VARCHAR,
	NAME VARCHAR,
	STUDENT_ID VARCHAR,
	MOBILE INT,
	VERIFICATION BOOL
);

create table "book_exchange".book_details(
	ISBN varchar PRIMARY KEY,
	Book_name varchar,
	author varchar
);

create table "book_exchange".Sold_out_books(
	book_id int primary key,
	ISBN varchar,
	price int,
	course varchar,
	buyer_email varchar,
	seller_email varchar,
	time_stamp timestamp,
	foreign key(ISBN) references book_details(ISBN),
	foreign key (buyer_email) references USERS(email),
	foreign key (seller_email) references USERS(email)
);

CREATE TABLE "book_exchange".AVAILABLE_BOOKS(
	BOOK_ID SERIAL PRIMARY KEY,
	EMAIL VARCHAR,
	ISBN VARCHAR,
	COURSE VARCHAR,
	PRICE INT,
	FOREIGN KEY(EMAIL) REFERENCES USERS(EMAIL),
	FOREIGN KEY(ISBN) REFERENCES BOOK_DETAILS(ISBN)
);

CREATE TABLE WISHLIST(
    EMAIL VARCHAR,
	BOOK_ID INT,
	PRIMARY KEY(EMAIL,BOOK_ID),
	FOREIGN KEY(EMAIL) REFERENCES USERS(EMAIL)
);

CREATE TABLE HISTORY(
	EMAIL VARCHAR,
	BOOK_ID INT,
	STATUS INT,
	PRIMARY KEY(EMAIL,BOOK_ID),
	FOREIGN KEY(EMAIL) REFERENCES USERS(EMAIL)
);

