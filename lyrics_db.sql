-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2023 at 12:56 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lyrics_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE `album` (
  `id_album` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `release_date` date NOT NULL,
  `artist_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`id_album`, `name`, `release_date`, `artist_id`) VALUES
(1, '0', '2022-09-13', 3);

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

CREATE TABLE `artist` (
  `id_artist` int(11) NOT NULL,
  `name` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `artist`
--

INSERT INTO `artist` (`id_artist`, `name`) VALUES
(1, 'dsfs'),
(3, 'Drake');

-- --------------------------------------------------------

--
-- Table structure for table `song`
--

CREATE TABLE `song` (
  `id` int(11) NOT NULL,
  `title` varchar(512) NOT NULL,
  `artist` varchar(512) NOT NULL,
  `album` varchar(512) NOT NULL,
  `lyrics` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `song`
--

INSERT INTO `song` (`id`, `title`, `artist`, `album`, `lyrics`) VALUES
(1, 'Explicabo Natus non', 'Id beatae quia ulla', 'Proident est volupt', 'In irure veniam dig'),
(2, 'Dolor cum soluta qua', 'Delectus reiciendis', 'Ut iure illo rem inc', 'Sunt similique repud'),
(3, 'Expedita qui dolores', 'Natus quia id rerum ', 'Aut qui corporis dol', 'Quia voluptatibus li'),
(4, 'Exercitationem solut', 'Et aliquam eveniet ', 'At quos velit in inc', 'Aspernatur voluptate'),
(5, 'Possimus id dolores', 'Corporis reprehender', 'Dolorem error nihil ', 'Occaecat nesciunt d'),
(6, 'Harum vero dolores c', 'Ut architecto ut lab', 'Qui labore sed et en', 'Ipsa ipsum placeat'),
(7, 'Est dicta sunt et ', 'Cumque blanditiis qu', 'Quis enim eaque fugi', 'In ipsum eum qui ve'),
(8, 'Rerum incidunt nisi', 'Ex cillum sed adipis', 'Officia nihil autem ', 'Saepe magna blanditi'),
(9, 'Est dicta sunt et ', 'Cumque blanditiis qu', 'Quis enim eaque fugi', 'In ipsum eum qui ve'),
(10, 'Rerum incidunt nisi', 'Ex cillum sed adipis', 'Officia nihil autem ', 'Saepe magna blanditi'),
(11, 'Aute et voluptas mol', 'Tempor aut do enim n', 'Et doloribus iure qu', 'Est corrupti neque '),
(12, 'Assumenda eiusmod co', 'Dolorum ullamco esse', 'Minus nemo in debiti', 'Placeat esse dolor'),
(13, 'Et accusantium magna', 'Recusandae Hic amet', 'Quisquam accusamus n', 'Mollitia architecto '),
(14, 'Voluptatum nostrud p', 'Vel quam necessitati', 'Nihil laborum eaque ', 'Eum sed possimus du'),
(15, 'Voluptas eum perfere', 'Ut suscipit ex archi', 'Omnis dolore labore ', 'Ratione perspiciatis'),
(16, 'Laborum earum qui ea', 'Sint incidunt ut am', 'Inventore expedita f', 'Sed laboris aliquip '),
(17, 'Incididunt distincti', 'Enim placeat est po', 'Iure ad in ullam eve', 'Vero eius similique '),
(18, 'Reprehenderit labor', 'Molestiae aspernatur', 'Et esse quos pariat', 'Laboris sit provide'),
(19, 'Corporis sapiente eu', 'Suscipit reiciendis ', 'Nihil ut magna in qu', 'Aut vitae similique '),
(20, 'Exercitationem disti', 'Modi quis est labore', 'Quo impedit archite', 'Dolor temporibus adi'),
(21, 'Quos eum laudantium', 'Aliquam voluptatum l', 'Impedit eius distin', 'Est consequat Occa'),
(22, 'Autem at voluptatibu', 'Est et ullam quibus', 'At laudantium conse', 'Harum corporis ducim'),
(23, 'Voluptatem qui in s', 'Est nisi officia tem', 'Hic doloribus rerum ', 'Voluptatum magnam qu'),
(24, 'Autem at voluptatibu', 'Est et ullam quibus', 'At laudantium conse', 'Harum corporis ducim'),
(25, 'Voluptatem qui in s', 'Est nisi officia tem', 'Hic doloribus rerum ', 'Voluptatum magnam qu'),
(26, 'Elit dicta magni ad', 'Nemo consequatur en', 'Voluptatem Eveniet', 'Dolore modi dolor ad'),
(27, 'Elit dicta magni ad', 'Nemo consequatur en', 'Voluptatem Eveniet', 'Dolore modi dolor ad'),
(28, 'Elit dicta magni ad', 'Nemo consequatur en', 'Voluptatem Eveniet', 'Dolore modi dolor ad'),
(29, 'Quo rerum reprehende', 'Deserunt laboris vol', 'Et laborum Sit volu', 'Dolor enim nesciunt');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id_album`),
  ADD KEY `artist_id` (`artist_id`);

--
-- Indexes for table `artist`
--
ALTER TABLE `artist`
  ADD PRIMARY KEY (`id_artist`);

--
-- Indexes for table `song`
--
ALTER TABLE `song`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `id_album` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `artist`
--
ALTER TABLE `artist`
  MODIFY `id_artist` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `song`
--
ALTER TABLE `song`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `album_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id_artist`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
