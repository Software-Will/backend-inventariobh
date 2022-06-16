-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2022 at 06:37 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventariobh`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrador`
--

CREATE TABLE `administrador` (
  `idAdmin` int(11) NOT NULL,
  `nombreAdmin` varchar(20) NOT NULL,
  `telefono` varchar(9) NOT NULL,
  `mail` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `administrador`
--

INSERT INTO `administrador` (`idAdmin`, `nombreAdmin`, `telefono`, `mail`, `username`, `password`) VALUES
(1, 'William Chávez', '958234123', 'will@gmail.com', 'willcd', 'willcd'),
(2, 'Merly Vallejos', '965874234', 'mariposita@gmail.com', 'mervh', 'mervh'),
(3, 'Adriana Quijano', '945687234', 'adri@gmail.com', 'adriqs', 'adriqs'),
(4, 'Braya Alocen', '935747395', 'braya@gmail.com', 'braya', 'braya'),
(5, 'Anthony Terrel', '999999999', 'anthony@gmail.com', 'anthony', 'anthony');

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

CREATE TABLE `categoria` (
  `idCategoria` int(11) NOT NULL,
  `nombreCategoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `nombreCategoria`) VALUES
(1, 'Metalico'),
(2, 'No Metalico');

-- --------------------------------------------------------

--
-- Table structure for table `detallepedido`
--

CREATE TABLE `detallepedido` (
  `idDetallePedido` int(11) NOT NULL,
  `idPedido` int(11) NOT NULL,
  `idInsumo` int(11) NOT NULL,
  `cantidadPedido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `detallepedido`
--

INSERT INTO `detallepedido` (`idDetallePedido`, `idPedido`, `idInsumo`, `cantidadPedido`) VALUES
(1, 1, 2, 1000),
(2, 1, 11, 1000),
(3, 1, 10, 1000),
(4, 1, 5, 1000),
(5, 1, 3, 1000),
(8, 1, 2, 200),
(9, 1, 1, 3000),
(10, 1, 3, 8900),
(11, 1, 11, 7000),
(12, 1, 5, 200),
(13, 1, 5, 200),
(14, 1, 5, 200),
(15, 1, 2, 200),
(16, 1, 8, 500),
(17, 1, 8, 500),
(18, 2, 2, 500),
(19, 2, 8, 500),
(20, 2, 11, 500),
(31, 3, 2, 10000),
(32, 3, 11, 13000),
(33, 3, 2, 10000),
(34, 3, 11, 13000),
(35, 3, 2, 10000),
(36, 3, 11, 13000),
(37, 3, 3, 1500),
(38, 3, 8, 1500),
(39, 3, 2, 10000),
(40, 3, 11, 13000),
(41, 4, 2, 10000),
(42, 4, 2, 10000),
(43, 4, 2, 10000),
(44, 4, 2, 10000),
(45, 4, 2, 10000),
(46, 4, 2, 10000),
(47, 4, 8, 3000),
(48, 4, 2, 10000),
(49, 4, 8, 3000),
(52, 5, 2, 10000),
(53, 5, 8, 3000),
(54, 5, 2, 10000),
(55, 5, 8, 3000),
(56, 5, 2, 10000),
(57, 5, 8, 3000),
(58, 5, 2, 10000),
(59, 5, 8, 3000),
(60, 5, 3, 400),
(61, 5, 2, 10000),
(62, 5, 8, 3000),
(63, 5, 3, 400),
(64, 5, 2, 10000),
(65, 5, 8, 3000),
(66, 5, 3, 400),
(67, 5, 2, 10000),
(68, 5, 8, 3000),
(69, 5, 3, 400),
(70, 5, 2, 10000),
(71, 5, 8, 3000),
(72, 5, 3, 400),
(73, 5, 2, 10000),
(74, 5, 8, 3000),
(75, 5, 2, 400),
(76, 5, 2, 10000),
(77, 5, 8, 3000),
(78, 5, 2, 400),
(79, 5, 2, 10000),
(80, 5, 8, 3000),
(81, 5, 2, 400),
(82, 5, 2, 10000),
(83, 5, 8, 3000),
(84, 5, 2, 400),
(85, 5, 2, 10000),
(86, 5, 8, 3000),
(87, 5, 2, 400),
(88, 5, 2, 10000),
(89, 5, 8, 3000),
(90, 5, 2, 400),
(91, 5, 2, 10000),
(92, 5, 8, 3000),
(93, 5, 2, 400),
(94, 5, 2, 10000),
(95, 5, 8, 3000),
(96, 5, 2, 400),
(97, 5, 2, 10000),
(98, 5, 8, 3000),
(99, 5, 2, 400),
(100, 5, 2, 10000),
(101, 5, 8, 3000),
(102, 5, 2, 400),
(103, 5, 2, 10000),
(104, 5, 8, 3000),
(105, 5, 2, 400),
(106, 5, 2, 10000),
(107, 5, 8, 3000),
(108, 5, 2, 400),
(109, 5, 2, 10000),
(110, 5, 8, 3000),
(111, 5, 2, 400),
(112, 5, 2, 10000),
(113, 5, 8, 3000),
(114, 5, 2, 400),
(115, 5, 2, 10000),
(116, 5, 8, 3000),
(117, 5, 2, 400),
(118, 5, 2, 10000),
(119, 5, 8, 3000),
(120, 5, 2, 400),
(121, 5, 2, 10000),
(122, 5, 8, 3000),
(123, 5, 2, 400),
(124, 5, 2, 10000),
(125, 5, 8, 3000),
(126, 5, 2, 400),
(127, 5, 2, 10000),
(128, 5, 8, 3000),
(129, 5, 2, 400),
(130, 5, 2, 10000),
(131, 5, 8, 3000),
(132, 5, 2, 400),
(133, 5, 2, 10000),
(134, 5, 8, 3000),
(135, 5, 2, 400),
(136, 5, 2, 10000),
(137, 5, 8, 3000),
(138, 5, 2, 400),
(139, 5, 3, 10000),
(140, 5, 8, 3000),
(141, 5, 2, 400),
(142, 5, 3, 10000),
(143, 5, 8, 3000),
(144, 5, 2, 400),
(145, 5, 3, 10000),
(146, 5, 8, 3000),
(147, 5, 2, 400),
(148, 5, 3, 10000),
(149, 5, 8, 3000),
(150, 5, 2, 400),
(151, 5, 3, 10000),
(152, 5, 8, 3000),
(153, 5, 2, 400),
(154, 5, 3, 10000),
(155, 5, 8, 3000),
(156, 5, 2, 400),
(157, 5, 3, 10000),
(158, 5, 8, 3000),
(159, 5, 2, 400);

-- --------------------------------------------------------

--
-- Stand-in structure for view `detallepedido_view`
-- (See below for the actual view)
--
CREATE TABLE `detallepedido_view` (
`idDetallePedido` int(11)
,`idPedido` int(11)
,`nombreInsumo` varchar(255)
,`costoInsumo` decimal(10,2)
,`cantidadPedido` int(11)
,`costoDetalle` decimal(20,2)
);

-- --------------------------------------------------------

--
-- Table structure for table `detallesalida`
--

CREATE TABLE `detallesalida` (
  `idDetalleSalida` int(11) NOT NULL,
  `idSalida` int(11) NOT NULL,
  `idInsumo` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `entrada`
--

CREATE TABLE `entrada` (
  `idEntrada` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `idAdmin` int(11) NOT NULL,
  `idProveedor` int(11) NOT NULL,
  `idPedido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `entrada`
--

INSERT INTO `entrada` (`idEntrada`, `fecha`, `idAdmin`, `idProveedor`, `idPedido`) VALUES
(1, '2022-06-17 03:32:09', 1, 1, 1);

-- --------------------------------------------------------

--
-- Stand-in structure for view `entrada_view`
-- (See below for the actual view)
--
CREATE TABLE `entrada_view` (
`idEntrada` int(11)
,`nombreProveedor` varchar(255)
,`fechaPedido` datetime
,`fechaEntrada` datetime
,`administrador` varchar(20)
,`valorEntrada` decimal(10,2)
);

-- --------------------------------------------------------

--
-- Table structure for table `estado`
--

CREATE TABLE `estado` (
  `idEstado` int(11) NOT NULL,
  `estado` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `estado`
--

INSERT INTO `estado` (`idEstado`, `estado`) VALUES
(1, 'Recibido'),
(2, 'Pendiente');

-- --------------------------------------------------------

--
-- Table structure for table `insumos`
--

CREATE TABLE `insumos` (
  `idInsumo` int(11) NOT NULL,
  `nombreInsumo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `costo` decimal(10,2) NOT NULL,
  `idCategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `insumos`
--

INSERT INTO `insumos` (`idInsumo`, `nombreInsumo`, `descripcion`, `stock`, `costo`, `idCategoria`) VALUES
(1, 'Níquel', '...', 150, '65.00', 1),
(2, 'Hierro', '...', 180, '35.00', 1),
(3, 'Cromo', '...', 240, '80.00', 1),
(4, 'Silicio', '...', 190, '120.00', 1),
(5, 'Molibdeno', '...', 200, '45.00', 1),
(6, 'Carbon', '...', 890, '65.00', 2),
(7, 'Manganeso', '...', 560, '90.00', 1),
(8, 'Zinc', '...', 450, '120.00', 1),
(9, 'Azufre', '...', 965, '45.00', 2),
(10, 'Fósforo', '...', 480, '70.00', 2),
(11, 'Arrabio', '...', 700, '35.00', 1);

-- --------------------------------------------------------

--
-- Stand-in structure for view `insumos_view`
-- (See below for the actual view)
--
CREATE TABLE `insumos_view` (
`idInsumo` int(11)
,`nombreInsumo` varchar(255)
,`descripcion` varchar(255)
,`stock` int(11)
,`costo` decimal(10,2)
,`categoria` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `manufactura`
--

CREATE TABLE `manufactura` (
  `idManufactura` int(11) NOT NULL,
  `nombreManufactura` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `manufactura`
--

INSERT INTO `manufactura` (`idManufactura`, `nombreManufactura`) VALUES
(1, 'Acero VCL'),
(2, 'Acero H13'),
(3, 'Acero Inoxidable'),
(4, 'Acero de Aleación'),
(5, 'Acero Galvanizado'),
(6, 'Acero Laminado'),
(7, 'Acero Corrugado');

-- --------------------------------------------------------

--
-- Table structure for table `pedido`
--

CREATE TABLE `pedido` (
  `idPedido` int(11) NOT NULL,
  `idProveedor` int(11) NOT NULL,
  `idAdmin` int(11) NOT NULL,
  `idEstado` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `totalInsumos` int(11) NOT NULL,
  `costoPedido` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pedido`
--

INSERT INTO `pedido` (`idPedido`, `idProveedor`, `idAdmin`, `idEstado`, `fecha`, `descripcion`, `totalInsumos`, `costoPedido`) VALUES
(1, 4, 1, 1, '2022-06-15 03:26:59', '1111111111', 17, '1578000.00'),
(2, 1, 1, 2, '2022-06-15 22:53:11', '...', 17, '5000.00'),
(3, 4, 3, 2, '2022-06-16 01:27:18', '...', 3, '600.00'),
(4, 4, 3, 2, '2022-06-16 01:43:36', '...', 20, '600.00'),
(5, 4, 1, 2, '2022-06-16 02:05:03', '...', 20, '600.00');

-- --------------------------------------------------------

--
-- Stand-in structure for view `pedido_view`
-- (See below for the actual view)
--
CREATE TABLE `pedido_view` (
`idPedido` int(11)
,`proveedor` varchar(255)
,`administrador` varchar(20)
,`fecha` datetime
,`descripcion` varchar(255)
,`totalInsumos` int(11)
,`costoPedido` decimal(10,2)
,`estado` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `proveedores`
--

CREATE TABLE `proveedores` (
  `idProveedor` int(11) NOT NULL,
  `nombreProveedor` varchar(255) NOT NULL,
  `ruc` varchar(11) NOT NULL,
  `telefono` varchar(9) NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `proveedores`
--

INSERT INTO `proveedores` (`idProveedor`, `nombreProveedor`, `ruc`, `telefono`, `ciudad`, `direccion`) VALUES
(1, 'Materias Primas y Quimicos MG', '17482910311', '987654321', 'Huaycan', 'Av. 15 de Julio Mz. A Lt. 39 Zona A'),
(2, 'NewChem & Commerce', '19853189411', '980065987', 'Independencia', 'Av. Industrial 3515'),
(3, 'Materias Primas JK', '15834523511', '999767356', 'Ate', 'Av. Carretera Central Esq. Av.La Estrella, Km 10.5'),
(4, 'IMPN', '14267341211', '912345678', 'Callao', 'Av. Oscar Benavides 5185'),
(5, 'Procesadora de Materias Primas Industria SAC', '15635120991', '922675908', 'Ate', 'Av. Los Incas 205 Mz. A Lt. 7 Ex. Av. Circunvalacion'),
(6, 'testUpdate', 'tes', 'test', 'test', 'test'),
(8, 'testProveedor3', 'tes', 'test', 'test', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `salida`
--

CREATE TABLE `salida` (
  `idSalida` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `idAdmin` int(11) NOT NULL,
  `idManufactura` int(11) NOT NULL,
  `cantidadInsumos` int(11) NOT NULL,
  `valorSalida` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure for view `detallepedido_view`
--
DROP TABLE IF EXISTS `detallepedido_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `detallepedido_view`  AS SELECT `d`.`idDetallePedido` AS `idDetallePedido`, `p`.`idPedido` AS `idPedido`, `i`.`nombreInsumo` AS `nombreInsumo`, `i`.`costo` AS `costoInsumo`, `d`.`cantidadPedido` AS `cantidadPedido`, `i`.`costo`* `d`.`cantidadPedido` AS `costoDetalle` FROM ((`detallepedido` `d` join `pedido` `p`) join `insumos` `i` on(`d`.`idPedido` = `p`.`idPedido` and `d`.`idInsumo` = `i`.`idInsumo`))  ;

-- --------------------------------------------------------

--
-- Structure for view `entrada_view`
--
DROP TABLE IF EXISTS `entrada_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `entrada_view`  AS SELECT `e`.`idEntrada` AS `idEntrada`, `p`.`nombreProveedor` AS `nombreProveedor`, `o`.`fecha` AS `fechaPedido`, `e`.`fecha` AS `fechaEntrada`, `a`.`nombreAdmin` AS `administrador`, `o`.`costoPedido` AS `valorEntrada` FROM (((`entrada` `e` join `proveedores` `p`) join `administrador` `a`) join `pedido` `o` on(`e`.`idProveedor` = `p`.`idProveedor` and `e`.`idAdmin` = `a`.`idAdmin` and `e`.`idPedido` = `o`.`idPedido`))  ;

-- --------------------------------------------------------

--
-- Structure for view `insumos_view`
--
DROP TABLE IF EXISTS `insumos_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `insumos_view`  AS SELECT `i`.`idInsumo` AS `idInsumo`, `i`.`nombreInsumo` AS `nombreInsumo`, `i`.`descripcion` AS `descripcion`, `i`.`stock` AS `stock`, `i`.`costo` AS `costo`, `c`.`nombreCategoria` AS `categoria` FROM (`insumos` `i` join `categoria` `c` on(`i`.`idCategoria` = `c`.`idCategoria`))  ;

-- --------------------------------------------------------

--
-- Structure for view `pedido_view`
--
DROP TABLE IF EXISTS `pedido_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `pedido_view`  AS SELECT `p`.`idPedido` AS `idPedido`, `o`.`nombreProveedor` AS `proveedor`, `a`.`nombreAdmin` AS `administrador`, `p`.`fecha` AS `fecha`, `p`.`descripcion` AS `descripcion`, `p`.`totalInsumos` AS `totalInsumos`, `p`.`costoPedido` AS `costoPedido`, `e`.`estado` AS `estado` FROM (((`pedido` `p` join `proveedores` `o`) join `estado` `e`) join `administrador` `a` on(`p`.`idProveedor` = `o`.`idProveedor` and `p`.`idEstado` = `e`.`idEstado` and `p`.`idAdmin` = `a`.`idAdmin`))  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`idAdmin`);

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indexes for table `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD PRIMARY KEY (`idDetallePedido`),
  ADD KEY `idPedido` (`idPedido`),
  ADD KEY `idInsumo` (`idInsumo`);

--
-- Indexes for table `detallesalida`
--
ALTER TABLE `detallesalida`
  ADD PRIMARY KEY (`idDetalleSalida`),
  ADD KEY `idSalida` (`idSalida`),
  ADD KEY `idInsumo` (`idInsumo`);

--
-- Indexes for table `entrada`
--
ALTER TABLE `entrada`
  ADD PRIMARY KEY (`idEntrada`),
  ADD KEY `idAdmin` (`idAdmin`),
  ADD KEY `idProveedor` (`idProveedor`),
  ADD KEY `idPedido` (`idPedido`);

--
-- Indexes for table `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`idEstado`);

--
-- Indexes for table `insumos`
--
ALTER TABLE `insumos`
  ADD PRIMARY KEY (`idInsumo`),
  ADD KEY `idCategoria` (`idCategoria`);

--
-- Indexes for table `manufactura`
--
ALTER TABLE `manufactura`
  ADD PRIMARY KEY (`idManufactura`);

--
-- Indexes for table `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`idPedido`),
  ADD KEY `idProveedor` (`idProveedor`),
  ADD KEY `idEstado` (`idEstado`),
  ADD KEY `idAdmin` (`idAdmin`);

--
-- Indexes for table `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`idProveedor`);

--
-- Indexes for table `salida`
--
ALTER TABLE `salida`
  ADD PRIMARY KEY (`idSalida`),
  ADD KEY `idAdmin` (`idAdmin`),
  ADD KEY `idManufactura` (`idManufactura`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrador`
--
ALTER TABLE `administrador`
  MODIFY `idAdmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `detallepedido`
--
ALTER TABLE `detallepedido`
  MODIFY `idDetallePedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=172;

--
-- AUTO_INCREMENT for table `detallesalida`
--
ALTER TABLE `detallesalida`
  MODIFY `idDetalleSalida` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `entrada`
--
ALTER TABLE `entrada`
  MODIFY `idEntrada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `estado`
--
ALTER TABLE `estado`
  MODIFY `idEstado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `insumos`
--
ALTER TABLE `insumos`
  MODIFY `idInsumo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `manufactura`
--
ALTER TABLE `manufactura`
  MODIFY `idManufactura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=424;

--
-- AUTO_INCREMENT for table `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `idProveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `salida`
--
ALTER TABLE `salida`
  MODIFY `idSalida` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD CONSTRAINT `detallepedido_ibfk_2` FOREIGN KEY (`idInsumo`) REFERENCES `insumos` (`idInsumo`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `detallepedido_ibfk_3` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detallesalida`
--
ALTER TABLE `detallesalida`
  ADD CONSTRAINT `detallesalida_ibfk_1` FOREIGN KEY (`idSalida`) REFERENCES `salida` (`idSalida`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detallesalida_ibfk_2` FOREIGN KEY (`idInsumo`) REFERENCES `insumos` (`idInsumo`) ON UPDATE CASCADE;

--
-- Constraints for table `entrada`
--
ALTER TABLE `entrada`
  ADD CONSTRAINT `entrada_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `administrador` (`idAdmin`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entrada_ibfk_2` FOREIGN KEY (`idProveedor`) REFERENCES `proveedores` (`idProveedor`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entrada_ibfk_3` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`) ON UPDATE CASCADE;

--
-- Constraints for table `insumos`
--
ALTER TABLE `insumos`
  ADD CONSTRAINT `insumos_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`) ON UPDATE CASCADE;

--
-- Constraints for table `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`idProveedor`) REFERENCES `proveedores` (`idProveedor`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`idEstado`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_ibfk_3` FOREIGN KEY (`idAdmin`) REFERENCES `administrador` (`idAdmin`) ON UPDATE CASCADE;

--
-- Constraints for table `salida`
--
ALTER TABLE `salida`
  ADD CONSTRAINT `salida_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `administrador` (`idAdmin`) ON UPDATE CASCADE,
  ADD CONSTRAINT `salida_ibfk_2` FOREIGN KEY (`idManufactura`) REFERENCES `manufactura` (`idManufactura`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
