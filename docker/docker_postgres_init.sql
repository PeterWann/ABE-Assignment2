CREATE TABLE Rooms
(
	id INT UNIQUE NOT NULL,
    price FLOAT NOT NULL,
	roomnumber INT UNIQUE NOT NULL,
    fridge BOOLEAN NOT NULL,
    aircondition BOOLEAN NOT NULL,
    television BOOLEAN NOT NULL,
    roomservice BOOLEAN NOT NULL,
    available BOOLEAN NOT NULL,
    created_at VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO 
Rooms(id, price, roomnumber, fridge, aircondition, television, roomservice, available, created_at)
VALUES
(1, 299.99, 1, TRUE, TRUE, TRUE, TRUE, TRUE, '2011-10-05T14:48:00.000Z');

CREATE TABLE Reservations
(
	id INT UNIQUE NOT NULL,
    date_to VARCHAR(255) NOT NULL,
    date_from VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    room_id INT NOT NULL,
    FOREIGN KEY (room_id) REFERENCES Rooms(id)
);

INSERT INTO
Reservations(id, date_to, date_from, room_id)
VALUES
(1,'2020', '2022', 1)