-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2022 at 08:02 AM
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
(1, 'William Chavez', '958234123', 'will@gmail.com', 'willcd', 'willcd'),
(2, 'Merly Vallejos', '965874234', 'mariposita@gmail.com', 'mervh', 'mervh'),
(3, 'Adriana Quijano', '945687234', 'adri@gmail.com', 'adriqs', 'adriqs'),
(4, 'Braya Alocen', '935747395', 'braya@gmail.com', 'braya', 'braya'),
(5, 'Anthony Terrel', '946941572', 'anthony@gmail.com', 'anthony', 'anthony');

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
-- Table structure for table `detalleentrada`
--

CREATE TABLE `detalleentrada` (
  `idDetalleEntrada` int(11) NOT NULL,
  `idEntrada` int(11) NOT NULL,
  `idInsumo` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `valorEntrada` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(6, 'Acero de Laminado'),
(7, 'Acero de Corrugado');

-- --------------------------------------------------------

--
-- Table structure for table `pedido`
--

CREATE TABLE `pedido` (
  `idPedido` int(11) NOT NULL,
  `idProveedor` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `totalInsumos` int(11) NOT NULL,
  `costoPedido` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(1, 'Materias Primas y Quimicos MG', '17482910311', '987654321', 'Lima', 'Av. 15 de Julio Mz. A Lt. 39 Zona A (Huaycan)'),
(2, 'NewChem & Commerce', '19853189411', '980065987', 'Lima', 'Av. Industrial 3515 (Independencia)'),
(3, 'Materias Primas JK', '15834523511', '999767356', 'Lima', 'Av. Carretera Central Esq. Av.La Estrella, Km 10.5 (Ate)'),
(4, 'IMPN', '14267341211', '912345678', 'Lima', 'Av. Oscar Benavides 5185 (Callao)'),
(5, 'Procesadora de Materias Primas Industria SAC', '15635120991', '922675908', 'Lima', 'Av. Los Incas 205 Mz. A Lt. 7 Ex. Av. Circunvalacion (Ate)'),
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
-- Structure for view `insumos_view`
--
DROP TABLE IF EXISTS `insumos_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `insumos_view`  AS SELECT `i`.`idInsumo` AS `idInsumo`, `i`.`nombreInsumo` AS `nombreInsumo`, `i`.`descripcion` AS `descripcion`, `i`.`stock` AS `stock`, `i`.`costo` AS `costo`, `c`.`nombreCategoria` AS `categoria` FROM (`insumos` `i` join `categoria` `c` on(`i`.`idCategoria` = `c`.`idCategoria`))  ;

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
-- Indexes for table `detalleentrada`
--
ALTER TABLE `detalleentrada`
  ADD PRIMARY KEY (`idDetalleEntrada`),
  ADD KEY `idEntrada` (`idEntrada`),
  ADD KEY `idInsumo` (`idInsumo`);

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
  ADD KEY `idProveedor` (`idProveedor`);

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
  ADD KEY `idProveedor` (`idProveedor`);

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
-- AUTO_INCREMENT for table `detalleentrada`
--
ALTER TABLE `detalleentrada`
  MODIFY `idDetalleEntrada` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detallepedido`
--
ALTER TABLE `detallepedido`
  MODIFY `idDetallePedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detallesalida`
--
ALTER TABLE `detallesalida`
  MODIFY `idDetalleSalida` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `entrada`
--
ALTER TABLE `entrada`
  MODIFY `idEntrada` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `insumos`
--
ALTER TABLE `insumos`
  MODIFY `idInsumo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `manufactura`
--
ALTER TABLE `manufactura`
  MODIFY `idManufactura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=424;

--
-- AUTO_INCREMENT for table `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT;

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
-- Constraints for table `detalleentrada`
--
ALTER TABLE `detalleentrada`
  ADD CONSTRAINT `detalleentrada_ibfk_1` FOREIGN KEY (`idEntrada`) REFERENCES `entrada` (`idEntrada`) ON UPDATE CASCADE,
  ADD CONSTRAINT `detalleentrada_ibfk_2` FOREIGN KEY (`idInsumo`) REFERENCES `insumos` (`idInsumo`) ON UPDATE CASCADE;

--
-- Constraints for table `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD CONSTRAINT `detallepedido_ibfk_1` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detallepedido_ibfk_2` FOREIGN KEY (`idInsumo`) REFERENCES `insumos` (`idInsumo`) ON DELETE NO ACTION ON UPDATE CASCADE;

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
  ADD CONSTRAINT `entrada_ibfk_2` FOREIGN KEY (`idProveedor`) REFERENCES `proveedores` (`idProveedor`) ON UPDATE CASCADE;

--
-- Constraints for table `insumos`
--
ALTER TABLE `insumos`
  ADD CONSTRAINT `insumos_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`) ON UPDATE CASCADE;

--
-- Constraints for table `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`idProveedor`) REFERENCES `proveedores` (`idProveedor`) ON UPDATE CASCADE;

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
