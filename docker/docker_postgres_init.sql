CREATE TABLE Rooms
(
	id VARCHAR(255) UNIQUE NOT NULL,
    price FLOAT NOT NULL,
	roomnumber INT UNIQUE NOT NULL,
    fridge BOOLEAN NOT NULL,
    aircondition BOOLEAN NOT NULL,
    television BOOLEAN NOT NULL,
    roomservice BOOLEAN NOT NULL,
    available BOOLEAN NOT NULL,
    createdAt VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO 
Rooms(id, price, roomnumber, fridge, aircondition, television, roomservice, available, createdAt)
VALUES
('1', 299.99, 1, TRUE, TRUE, TRUE, TRUE, TRUE, '2011-10-05T14:48:00.000Z');

CREATE TABLE Reservations
(
	id VARCHAR(255) UNIQUE NOT NULL,
    dateTo VARCHAR(255) NOT NULL,
    dateFrom VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    roomId VARCHAR(255) NOT NULL,
    FOREIGN KEY (roomId) REFERENCES Rooms(id)
);

INSERT INTO
Reservations(id, dateTo, dateFrom, roomId)
VALUES
('1','2020', '2022', '1')