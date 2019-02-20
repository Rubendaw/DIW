-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 29-01-2019 a las 17:29:12
-- Versión del servidor: 5.7.24-0ubuntu0.18.04.1
-- Versión de PHP: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Heroes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SuperHeroes`
--

CREATE TABLE `SuperHeroes` (
  `IDHeroes` int(11) NOT NULL,
  `Nombre` varchar(44) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `Info` varchar(44) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `IDGrupo` int(11) NOT NULL,
  `IDFaccion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `SuperHeroes`
--

INSERT INTO `SuperHeroes` (`IDHeroes`, `Nombre`, `Info`, `IDGrupo`, `IDFaccion`) VALUES
(1, 'Thor', 'Asgardiano', 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `SuperHeroes`
--
ALTER TABLE `SuperHeroes`
  ADD PRIMARY KEY (`IDHeroes`),
  ADD KEY `IDGrupo` (`IDGrupo`),
  ADD KEY `IDFaccion` (`IDFaccion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `SuperHeroes`
--
ALTER TABLE `SuperHeroes`
  MODIFY `IDHeroes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `SuperHeroes`
--
ALTER TABLE `SuperHeroes`
  ADD CONSTRAINT `SuperHeroes_ibfk_1` FOREIGN KEY (`IDFaccion`) REFERENCES `Faccion` (`IDFaccion`),
  ADD CONSTRAINT `SuperHeroes_ibfk_2` FOREIGN KEY (`IDGrupo`) REFERENCES `Grupos` (`IDGrupo`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
