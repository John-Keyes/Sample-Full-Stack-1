DROP TABLE IF EXISTS `Grades`;
CREATE TABLE `Grades` (
	`studentID` INT UNSIGNED NOT NULL,
	`grade` INT(3) NOT NULL,
	KEY `studentIDx` (`studentID`),
    CONSTRAINT `gradeforStudent` FOREIGN KEY (`studentID`) REFERENCES `Students` (`studentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
