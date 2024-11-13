CREATE DATABASE  IF NOT EXISTS `fooddelivery` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `fooddelivery`;
-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: fooddelivery
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Burger','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fcategories%2F%F0%9F%8D%94.png?alt=media&token=24641f82-cd54-403a-a716-edc5e51c67c3'),(2,'Pizza','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fcategories%2F%F0%9F%8D%95.png?alt=media&token=885e573e-aade-4fda-804e-6af178be5d2c'),(3,'Sandwich','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fcategories%2F%F0%9F%8C%AD.png?alt=media&token=a0c67154-beee-4fe2-ae31-67179437f86e');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `price` varchar(20) NOT NULL,
  `category` varchar(50) NOT NULL,
  `evaluation` varchar(20) NOT NULL,
  `about` varchar(250) NOT NULL,
  `size` varchar(20) NOT NULL,
  `energy` varchar(20) NOT NULL,
  `delivery` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Chicken burger','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fproducts%2Fpngfind%201.png?alt=media&token=78093cea-57fb-4bf3-b855-eb72f47bc9de','200 gr chicken + cheese  Lettuce + tomato','22','Burger','4.8','Crispy seasoned chicken breast, topped with mandatory melted cheese and piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo ','Medium','554 KCal','45 min'),(2,'Chese burger','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fproducts%2F2-2-burger-free-download-png%202.png?alt=media&token=efe47f2d-8968-435d-be6d-f948a9008c06','200 gr meat + Lettuce cheese + onion + tomato ','25','Burger','4.5','Crispy seasoned chicken breast, topped with mandatory melted cheese and piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo ','Medium','554 KCal','45 min'),(3,'Chese burger','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fproducts%2Fpngfind%201%20(1).png?alt=media&token=565b13eb-5235-4d88-a17e-143a6f9be88e','200 gr meat + Lettuce cheese + onion + tomato ','20','Burger','5.0','Crispy seasoned chicken breast, topped with mandatory melted cheese and piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo ','Medium','554 KCal','45 min'),(4,'Chicken burger','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fproducts%2F2-2-burger-free-download-png%202%20(1).png?alt=media&token=e41fd6b5-7ba1-4b92-aba1-bd7117159e5b','200 gr chicken + cheese  Lettuce + tomato','30','Burger','4.0','Crispy seasoned chicken breast, topped with mandatory melted cheese and piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo ','Medium','554 KCal','45 min');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'fooddelivery'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-13 17:06:22
