DROP PROCEDURE IF EXISTS `StudentHasThis`;
DELIMITER $$
CREATE PROCEDURE `StudentHasThis`(IN table_Name VARCHAR(7), IN attribute VARCHAR(7), IN studentID INT, IN attributeVal VARCHAR(50))
BEGIN
    SET @selectCheck = CONCAT ("SELECT ", attribute, " FROM ", "WHERE studentID='", studentID,"';");
    PREPARE selectStmt FROM @selectCheck;
    IF EXISTS(EXECUTE selectStmt)
        BEGIN
            SET @updateQuery = CONCAT ("UPDATE ", attribute, " FROM ", table_NAME, "WHERE studentID='", studentID,"';");
            PREPARE updateStmt FROM @updateQuery;
            EXECUTE updateStmt;
            DEALLOCATE PREPARE updateStmt;
        END
    ELSE 
        BEGIN
            SET @insertQuery = CONCAT("INSERT INTO ",  table_Name, " (studentID,", attribute, ") VALUES (", studentID, ", ", attributeVal, ");");
            PREPARE insertStmt FROM @insertQuery;
            EXECUTE insertStmt;
            DEALLOCATE PREPARE insertStmt;
        END
    DEALLOCATE PREPARE selectStmt;
END$$

DELIMITER;