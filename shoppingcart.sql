-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2024 at 07:45 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shoppingcart`
--

-- --------------------------------------------------------

--
-- Table structure for table `file_data`
--

CREATE TABLE `file_data` (
  `id` varchar(255) NOT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `file_data`
--

INSERT INTO `file_data` (`id`, `file_path`, `name`, `type`) VALUES
('04e48b3f-a544-4266-b17b-6b00471df1a3', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/5.jpg', '5.jpg', 'image/jpeg'),
('0d30f972-2a5a-4728-8045-609d18684f06', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/18.jpg', '18.jpg', 'image/jpeg'),
('0f4fd164-493b-4006-ac4c-d27fc6b3ba98', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/19.jpg', '19.jpg', 'image/jpeg'),
('17cb0456-1ea1-487e-b9ae-73e3cc4372e8', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/11.jpg', '11.jpg', 'image/jpeg'),
('3bb55512-2c37-4cc1-91af-22c425cf0bf0', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/17.jpg', '17.jpg', 'image/jpeg'),
('56c81a79-d091-40e0-ab79-32446fa28faa', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/7.jpeg', '7.jpeg', 'image/jpeg'),
('5ba19bb8-5419-4773-8631-36d611edb4f3', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/9.jpg', '9.jpg', 'image/jpeg'),
('5d28277f-7060-4a98-946a-7e17b9470c11', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/12.jpg', '12.jpg', 'image/jpeg'),
('5daa811b-c449-41df-ad6f-7df64a6145dc', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/10.jpg', '10.jpg', 'image/jpeg'),
('682b6f35-bf81-4d2e-963b-cd2cfea8632b', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/20.jpg', '20.jpg', 'image/jpeg'),
('70405ecf-b3f9-45f2-973c-2250514172d1', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/3.jpg', '3.jpg', 'image/jpeg'),
('7f2b950c-aaba-4696-9426-fe6b54d9385a', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/15.jpg', '15.jpg', 'image/jpeg'),
('878aaa3a-8335-4cd3-bf84-5d07410939a9', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/16.jpg', '16.jpg', 'image/jpeg'),
('901b5268-d9a9-4eaa-8022-976ebca39759', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/2.jpg', '2.jpg', 'image/jpeg'),
('9cb5df4e-a809-4a2a-83d1-bee2e63b632d', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/4.jpg', '4.jpg', 'image/jpeg'),
('aab49b5c-94c5-4662-9a67-09b2454dfe35', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/6.jpg', '6.jpg', 'image/jpeg'),
('bcf41c91-442b-4320-8788-2c6a4625a036', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/1.jpg', '1.jpg', 'image/jpeg'),
('e664d81d-002b-4c3a-98df-48aa65409169', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/8.jpg', '8.jpg', 'image/jpeg'),
('e6e98af1-625a-4792-8187-6c23e4254d07', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/13.jpg', '13.jpg', 'image/jpeg'),
('f5c52a3e-cfec-4ec6-8ae0-ff6f033d6fb9', 'D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/14.jpg', '14.jpg', 'image/jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` varchar(255) NOT NULL,
  `amt` varchar(255) DEFAULT NULL,
  `ftype` varchar(255) DEFAULT NULL,
  `latest` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `shop` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `amt`, `ftype`, `latest`, `name`, `shop`, `pic`, `stock`) VALUES
('1554e6df-4919-4bea-a105-bcaa62d2fa91', '319', 'Pizza', 'No', 'Momo Mia Choco Sundae Meal', 'Pizza Hut', '7f2b950c-aaba-4696-9426-fe6b54d9385a', 10),
('1c45aad6-996d-40d4-88b0-39801a134792', '157', 'Cake', 'No', 'Classic Walnut Brownie', 'Shris Cake Zone', '878aaa3a-8335-4cd3-bf84-5d07410939a9', 10),
('1f96edd1-c550-4c32-acda-590962aeafc0', '185', 'Veg', 'Yes', 'Alfredo Pasta', 'LAKSHMI FOOD', '70405ecf-b3f9-45f2-973c-2250514172d1', 10),
('35c797c1-9e0c-430d-9a8a-677a16883b18', '299', 'Pizza', 'No', 'Farmers Pick', 'Pizza Hut', 'bcf41c91-442b-4320-8788-2c6a4625a036', 10),
('3c529e93-5ead-45ac-a500-022773e76830', '219', 'Pizza', 'No', 'Veg Extravaganza Pizza', 'LAKSHMI FOOD', '0d30f972-2a5a-4728-8045-609d18684f06', 10),
('3d4d832d-d611-4aeb-8d22-aae187b96fa7', '65', 'Veg', 'No', 'Paratha', 'pugal Ragu Bawa Tiffen Center', '682b6f35-bf81-4d2e-963b-cd2cfea8632b', 10),
('47370116-3531-473b-a068-d54029c66c16', '229', 'Pizza', 'No', 'Momo Mia Meal', 'Pizza Hut', '04e48b3f-a544-4266-b17b-6b00471df1a3', 10),
('57fdf289-2eaf-4a5d-afd0-23c42920cfa4', '99', 'IceCream', 'Yes', 'Cotton Candy Scoop', 'Cream & Fudge', '3bb55512-2c37-4cc1-91af-22c425cf0bf0', 10),
('822a6d16-b76e-4b3f-a95a-f995e9a34b03', '70', 'Juice', 'No', 'Orange Juice', 'JUICE MALL', 'aab49b5c-94c5-4662-9a67-09b2454dfe35', 10),
('83702855-f32c-4288-b134-e177910ee21a', '35', 'Sweet', 'No', 'Malai Doda', 'Shri Gupta Sweets', '5d28277f-7060-4a98-946a-7e17b9470c11', 10),
('8b1e3fc3-5325-4cd0-b899-97b35ac60aad', '350', 'Non-Veg', 'No', 'Spicy Chicken Afghani', 'Tandoori Wala', '5daa811b-c449-41df-ad6f-7df64a6145dc', 10),
('9688d3fb-190d-4ffc-b0b3-d4584b2d037d', '77', 'Sweet', 'No', 'Milk Halwa', 'Shri Gupta Sweets', '56c81a79-d091-40e0-ab79-32446fa28faa', 10),
('9ff83bd0-c8c3-428f-85b4-81f473a6db5a', '230', 'Veg', 'Yes', 'Veg Seekh Kebab', 'Tandoori Wala', '17cb0456-1ea1-487e-b9ae-73e3cc4372e8', 10),
('bd07c6a2-92a7-4c43-aa53-f5545296d290', '123', 'Veg', 'No', 'Vegetable Soup', 'Sri Saivihar', 'e664d81d-002b-4c3a-98df-48aa65409169', 10),
('c91b6679-03f7-46ee-9f1e-0e06aa16bfd7', '150', 'Soup', 'No', 'Cream of Chicken Soup', 'Tandoori Wala', '0f4fd164-493b-4006-ac4c-d27fc6b3ba98', 10),
('cdd52cb4-7359-4c0d-a90f-92da3bc084f9', '220', 'Non-Veg', 'Yes', 'Chicken 65', 'Salem Rr Briyani', '9cb5df4e-a809-4a2a-83d1-bee2e63b632d', 10),
('d30f5797-ec27-46ac-a2ac-942959a67400', '38', 'Veg', 'No', 'Curd Vadai', 'Sri Saivihar', 'f5c52a3e-cfec-4ec6-8ae0-ff6f033d6fb9', 10),
('db06ec4b-9d44-4d7d-9ad8-7c7ce73c5986', '235', 'Non-Veg', 'No', 'Hyderabad Chicken Dry', 'LAKSHMI FOOD', '5ba19bb8-5419-4773-8631-36d611edb4f3', 10),
('debf76bc-0089-4cb3-8fbd-eeece967cf52', '65', 'Veg', 'No', 'Paper Roast Dosa', 'Sri Saivihar', '901b5268-d9a9-4eaa-8022-976ebca39759', 10),
('e3ab80ff-bffd-4145-9fa1-0274b6626592', '101', 'Cake', 'No', 'Jam Roll Cake', 'Henry & Wolsey', 'e6e98af1-625a-4792-8187-6c23e4254d07', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `file_data`
--
ALTER TABLE `file_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_67ybiewqf92d4r6o4utbuw5fm` (`pic`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK96p95ug8mxj0vmu3oyh15qlai` FOREIGN KEY (`pic`) REFERENCES `file_data` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
