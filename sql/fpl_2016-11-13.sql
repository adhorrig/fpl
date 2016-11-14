# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.15)
# Database: fpl
# Generation Time: 2016-11-14 19:59:12 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table gameweeks
# ------------------------------------------------------------

DROP TABLE IF EXISTS `gameweeks`;

CREATE TABLE `gameweeks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `gameweek_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `event` int(11) DEFAULT NULL,
  `average_entry_score` int(11) DEFAULT NULL,
  `highest_scoring_entry` int(11) DEFAULT NULL,
  `highest_score` int(11) DEFAULT NULL,
  `is_previous` varchar(255) DEFAULT NULL,
  `is_current` varchar(255) DEFAULT NULL,
  `is_next` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table players
# ------------------------------------------------------------

DROP TABLE IF EXISTS `players`;

CREATE TABLE `players` (
  `player_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `web_name` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `second_name` varchar(255) DEFAULT NULL,
  `team_code` int(11) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `goals_scored` int(11) DEFAULT NULL,
  `assists` int(11) DEFAULT NULL,
  `clean_sheets` int(11) DEFAULT NULL,
  `goals_conceded` int(11) DEFAULT NULL,
  `own_goals` int(11) DEFAULT NULL,
  `penalties_saved` int(11) DEFAULT NULL,
  `penalties_missed` int(11) DEFAULT NULL,
  `points_per_game` int(11) DEFAULT NULL,
  PRIMARY KEY (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table profiles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `profiles`;

CREATE TABLE `profiles` (
  `profile_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `player_first_name` varchar(255) DEFAULT NULL,
  `player_last_name` varchar(255) DEFAULT NULL,
  `player_region_id` varchar(255) DEFAULT NULL,
  `player_region_short_iso` varchar(10) DEFAULT NULL,
  `summary_overall_points` int(11) DEFAULT NULL,
  `summary_overall_rank` int(11) DEFAULT NULL,
  `total_transfers` int(11) DEFAULT NULL,
  `team_name` varchar(255) DEFAULT NULL,
  `bank` int(11) DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `favourite_team` int(11) DEFAULT NULL,
  PRIMARY KEY (`profile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table teams
# ------------------------------------------------------------

DROP TABLE IF EXISTS `teams`;

CREATE TABLE `teams` (
  `team_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `code` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `short_name` varchar(255) DEFAULT NULL,
  `strength` int(11) DEFAULT NULL,
  `strength_overall_home` int(11) DEFAULT NULL,
  `strength_overall_away` int(11) DEFAULT NULL,
  `strength_attack_home` int(11) DEFAULT NULL,
  `strength_attack_away` int(11) DEFAULT NULL,
  `strength_defence_home` int(11) DEFAULT NULL,
  `strength_defence_away` int(11) DEFAULT NULL,
  `team_division` int(11) DEFAULT NULL,
  PRIMARY KEY (`team_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
