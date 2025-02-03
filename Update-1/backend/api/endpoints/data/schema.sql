CREATE TABLE cards (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    contact TEXT NOT NULL,
    services TEXT NOT NULL,
    about TEXT NOT NULL,
    location TEXT NOT NULL,
    logo_url TEXT NOT NULL,
    whatsapp_url TEXT NOT NULL,
    instagram_url TEXT NOT NULL,
    facebook_url TEXT NOT NULL,
    linkedin_url TEXT NOT NULL,
    custom_url TEXT NOT NULL,
    map_url TEXT NOT NULL
);

CREATE SEQUENCE cards_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER cards_before_insert
BEFORE INSERT ON cards
FOR EACH ROW
BEGIN
    SELECT cards_seq.NEXTVAL INTO :new.id FROM dual;
END;
/