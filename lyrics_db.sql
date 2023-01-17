-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2023 at 07:56 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

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
-- Table structure for table `artist`
--

CREATE TABLE `artist` (
  `id_artist` int(11) NOT NULL,
  `name` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `song`
--

CREATE TABLE `song` (
  `id` int(11) NOT NULL,
  `title` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `artist` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `album` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lyrics` text COLLATE utf8mb4_unicode_ci NOT NULL
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
-- AUTO_INCREMENT for table `artist`
--
ALTER TABLE `artist`
  MODIFY `id_artist` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `song`
--
ALTER TABLE `song`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
