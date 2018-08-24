-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 24, 2018 at 10:21 AM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `jewelry`
--

CREATE TABLE `jewelry` (
  `id` int(11) NOT NULL,
  `category` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `image` varchar(256) NOT NULL,
  `description` varchar(256) NOT NULL,
  `price` decimal(11,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jewelry`
--

INSERT INTO `jewelry` (`id`, `category`, `name`, `image`, `description`, `price`) VALUES
(1, 'earrings', 'blue sea', '../test/images/earrings2.jpg', '- Swarovski crystals\r\n- Silver ', '18'),
(2, 'earrings', 'blue sea', '../test/images/earrings1.jpg', '- Swarovski pearls\r\n- Hematite gemstones\r\n- Silver ', '18');

-- --------------------------------------------------------

--
-- Table structure for table `translation`
--

CREATE TABLE `translation` (
  `english` varchar(100) NOT NULL,
  `french` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `translation`
--

INSERT INTO `translation` (`english`, `french`) VALUES
('sun', 'soleil'),
('house', 'maison'),
('moon', 'lune'),
('girl', 'fille'),
('home', 'maison');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `name`) VALUES
(1, 'jamesg', 'graham@gmail.com', 'james graham'),
(2, 'markokh', 'markokh@gmail.com', 'marko khazri'),
(3, 'loretakh', 'loretakh@gmail.com', 'loreta khazri'),
(4, 'ausrastr', 'ausrastr@gmail.com', 'ausra strazdiene'),
(5, 'dariusstr', 'dariusstr@gmail.com', 'darius strazdas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jewelry`
--
ALTER TABLE `jewelry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jewelry`
--
ALTER TABLE `jewelry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
