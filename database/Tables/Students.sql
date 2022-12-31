DROP TABLE IF EXISTS `Students`;
CREATE TABLE `Students` (
	`studentID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`country` VARCHAR(32),
	`state` VARCHAR(32),
	`city` VARCHAR(32),
	`company` VARCHAR(32),
	`email` VARCHAR(320) UNIQUE NOT NULL,
	`password` VARCHAR(256) NOT NULL,
	`firstName` VARCHAR(32) NOT NULL,
	`lastName` VARCHAR(32) NOT NULL,
	`average` VARCHAR(32),
	`pic` TEXT NOT NULL,
	`isVerified` CHAR(1) NOT NULL,
	`isAdmin` CHAR(1) NOT NULL,
	PRIMARY KEY (`studentID`) USING BTREE
) ENGINE=InnoDB CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

