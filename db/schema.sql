-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'merch'
-- 
-- ---

DROP TABLE IF EXISTS `merch`;
		
CREATE TABLE `merch` (
  `id` INTEGER PRIMARY KEY NULL DEFAULT NULL,
  `name` VARCHAR(150) NULL DEFAULT NULL,
  `stars` DECIMAL(5) NULL DEFAULT NULL,
  `reviews` INTEGER(6) NULL DEFAULT NULL,
  `price` VARCHAR(25) NULL DEFAULT NULL,
  `imageUrl` VARCHAR(255) NULL DEFAULT NULL,
  `prime` INTEGER(1) NULL DEFAULT NULL
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `merch` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `merch` (`id`,`name`,`stars`,`reviews`,`price`,`imageUrl`,`prime`) VALUES
-- ('','','','','','','');