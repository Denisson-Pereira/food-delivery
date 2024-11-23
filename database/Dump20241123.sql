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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Burger','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fcategories%2F%F0%9F%8D%94.png?alt=media&token=24641f82-cd54-403a-a716-edc5e51c67c3'),(2,'Pizza','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fcategories%2F%F0%9F%8D%95.png?alt=media&token=885e573e-aade-4fda-804e-6af178be5d2c'),(3,'Sandwich','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fcategories%2F%F0%9F%8C%AD.png?alt=media&token=a0c67154-beee-4fe2-ae31-67179437f86e'),(4,'Natural','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/sanduiche%2F426-4266468_spring-onion-mayonnaise-spring-onion-chop-png%203.png?alt=media&token=e5bfdc06-ff50-48a1-ae86-21bee2a9aae3'),(5,'Fruits','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/sanduiche%2Fimage%208.png?alt=media&token=d007a42a-1f00-4820-8e9a-4181e071212c');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `evaluation` varchar(255) DEFAULT NULL,
  `about` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `energy` varchar(255) DEFAULT NULL,
  `delivery` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Chicken burger','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/fruits%2Fpngfind%201%20(2).png?alt=media&token=e5abbcf0-b366-47de-b70d-ee45d3c0ddd9','200 gr chicken + cheese  Lettuce + tomato','2299','Burger','4.8','Crispy seasoned chicken breast, topped with mandatory melted cheese and piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo ','Medium','524 KCal','45 min'),(2,'Chese burger','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fproducts%2F2-2-burger-free-download-png%202.png?alt=media&token=efe47f2d-8968-435d-be6d-f948a9008c06','200 gr meat + Lettuce cheese + onion + tomato ','2599','Burger','4.5','Crispy seasoned chicken breast, topped with mandatory melted cheese and piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo ','Medium','454 KCal','25 min'),(3,'Chese burger','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fproducts%2Fpngfind%201%20(1).png?alt=media&token=565b13eb-5235-4d88-a17e-143a6f9be88e','200 gr meat + Lettuce cheese + onion + tomato ','2099','Burger','5.0','Crispy seasoned chicken breast, topped with mandatory melted cheese and piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo ','Medium','354 KCal','45 min'),(4,'Chicken burger','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/foodDelivery%2Fproducts%2F2-2-burger-free-download-png%202%20(1).png?alt=media&token=e41fd6b5-7ba1-4b92-aba1-bd7117159e5b','200 gr chicken + cheese  Lettuce + tomato','3099','Burger','4.0','Crispy seasoned chicken breast, topped with mandatory melted cheese and piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo ','Medium','554 KCal','40 min'),(5,'Pepperoni','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/pizza%2Fimage%205.png?alt=media&token=c4b438d3-fafe-4d3e-942c-e296f8c80d77','A classic pizza with tomato sauce, mozzarella cheese, fresh basil.','7099','Pizza','4.0','Juicy grilled chicken breast, smothered in melted cheese and stacked on soft buns with crispy bacon, fresh lettuce, tomato, pickles, and a tangy ranch sauce.','Medium','750 KCal','30 min'),(6,'Margarita','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/pizza%2Fimage%206.png?alt=media&token=d067515c-2fe7-4c40-a805-3c9e2fd9db2d','Topped with tomato sauce, mozzarella cheese, and generous slices of crispy.','6599','Pizza','5.0','Juicy grilled chicken breast, smothered in melted cheese and stacked on soft buns with crispy bacon, fresh lettuce, tomato, pickles, and a tangy ranch sauce.','Medium','554 KCal','30 min'),(7,'Four Cheese','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/pizza%2Fimage%209.png?alt=media&token=6225d668-a28c-4c5a-9cd0-d3e1ef08fdb1','A blend of mozzarella, gorgonzola, parmesan, and provolone cheeses over.','5099','Pizza','4.5','Juicy grilled chicken breast, smothered in melted cheese and stacked on soft buns with crispy bacon, fresh lettuce, tomato, pickles, and a tangy ranch sauce.','Medium','684 KCal','35 min'),(8,'Classic BLT','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/sanduiche%2FSubway-Sandwich-Transparent-Free-PNG.png?alt=media&token=e3d5af41-b9c9-4da0-9623-d7c2662f52f4','Crispy bacon, fresh lettuce, and juicy tomato stacked between toasted bread','2599','Sandwich','4.2','Tender grilled chicken breast, covered in creamy melted cheese, nestled in soft buns with crispy fried onions, fresh lettuce, ripe tomato, crispy bacon, and a zesty BBQ sauce.','Medium','684 KCal','15 min'),(9,'Chicken Caesar ','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/sanduiche%2Fimage%20142.png?alt=media&token=b27f90a5-3eb1-4d78-b6e5-62e6b46b6889','Grilled chicken, crisp romaine lettuce, Parmesan cheese, and Caesar dressing','2099','Sandwich','5.0','Tender grilled chicken breast, covered in creamy melted cheese, nestled in soft buns with crispy fried onions, fresh lettuce, ripe tomato, crispy bacon, and a zesty BBQ sauce.','Medium','184 KCal','20 min'),(10,'BBQ Pulled','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/sanduiche%2Fimage%20143.png?alt=media&token=4de817d2-21e9-4591-b514-6d2a45ea240b','Tender pulled pork smothered in smoky BBQ sauce, topped with creamy coleslaw','1599','Sandwich','3.9','Tender grilled chicken breast, covered in creamy melted cheese, nestled in soft buns with crispy fried onions, fresh lettuce, ripe tomato, crispy bacon, and a zesty BBQ sauce.','Medium','254 KCal','10 min'),(11,'Veggie Delight','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/sanduiche%2Fimage%20144.png?alt=media&token=d5243e58-0935-4602-abff-f10aba08250c','Grilled vegetables like zucchini, bell peppers, and mushrooms, paired with fresh','1099','Sandwich','2.0','Tender grilled chicken breast, covered in creamy melted cheese, nestled in soft buns with crispy fried onions, fresh lettuce, ripe tomato, crispy bacon, and a zesty BBQ sauce.','Medium','200 KCal','25 min'),(12,'Salad BLT','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/sanduiche%2F23630-4-salad-transparent%201.png?alt=media&token=bd85a611-3d1b-4164-a6df-44be1a0c3741','A fresh veggie patty with lettuce, tomato, avocado, and a light dressing.','1599','Natural','5.0','A wholesome veggie patty made from fresh greens, beans, and grains, topped with ripe tomato, crisp lettuce, avocado slices, and a light vinaigrette, all sandwiched between soft whole-grain buns.','Medium','100 KCal','10 min'),(13,'Garden Burger','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/sanduiche%2Fimage%20141.png?alt=media&token=2f9eec92-8db9-4fb7-b1d2-604de93dfdca','Avocado, and a light dressing, served on a whole-grain bun.','2099','Natural','5.0','A wholesome veggie patty made from fresh greens, beans, and grains, topped with ripe tomato, crisp lettuce, avocado slices, and a light vinaigrette, all sandwiched between soft whole-grain buns.','Medium','100 KCal','10 min'),(14,'Strawberry Bliss','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/fruits%2FImage%20(3).png?alt=media&token=73cb0f72-7f35-4dd7-a3ac-a5c3869fbdba','A refreshing blend of ripe strawberries, offering a sweet and tangy flavor in every sip.','1299','Fruits','4.2','A naturally sweet and refreshing juice, made with the freshest fruits, offering a smooth and wholesome flavor in every sip.','Big','100 KCal','10 min'),(15,'Citrus Burst','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/fruits%2FImage%20(2).png?alt=media&token=a13e4850-3ac5-4953-b650-7be1735a640c','A vibrant mix of fresh oranges, packed with vitamin C and a tangy, refreshing taste.','1299','Fruits','4.5','A naturally sweet and refreshing juice, made with the freshest fruits, offering a smooth and wholesome flavor in every sip.','Big','100 KCal','10 min'),(16,'Tropical Kiwi','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/fruits%2FImage.png?alt=media&token=41857cb1-e37c-4adb-b2aa-e04333a896d3','A smooth and tangy kiwi juice, bursting with tropical flavors and a hint of sweetness.','1299','Fruits','4.8','A naturally sweet and refreshing juice, made with the freshest fruits, offering a smooth and wholesome flavor in every sip.','Big','100 KCal','10 min'),(17,'Pineapple Splash','https://firebasestorage.googleapis.com/v0/b/kom-delivery.appspot.com/o/fruits%2FImage%20(1).png?alt=media&token=c2de18bc-5a84-4055-a0d2-170657ef2d56','A sweet and tropical pineapple juice, delivering a refreshing and zesty experience.','1299','Fruits','4.9','A naturally sweet and refreshing juice, made with the freshest fruits, offering a smooth and wholesome flavor in every sip.','Big','100 KCal','10 min');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-23 19:36:41
