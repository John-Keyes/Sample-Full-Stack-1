CREATE TABLE `Skills` (
	`studentID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`skill` VARCHAR(50) NOT NULL,
	KEY `studentIDx` (`studentID`),
    CONSTRAINT `skillforStudent` FOREIGN KEY (`studentID`) REFERENCES `Students` (`studentID`)
) ENGINE=InnoDB CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

