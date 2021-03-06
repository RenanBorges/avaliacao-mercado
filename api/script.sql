USE [master]
GO
/****** Object:  Database [avaliacaoMercado]    Script Date: 31/05/2021 00:43:21 ******/
CREATE DATABASE [avaliacaoMercado]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'avaliacaoMercado', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\avaliacaoMercado.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'avaliacaoMercado_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\avaliacaoMercado_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [avaliacaoMercado] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [avaliacaoMercado].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [avaliacaoMercado] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET ARITHABORT OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [avaliacaoMercado] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [avaliacaoMercado] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [avaliacaoMercado] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET  ENABLE_BROKER 
GO
ALTER DATABASE [avaliacaoMercado] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [avaliacaoMercado] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [avaliacaoMercado] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [avaliacaoMercado] SET  MULTI_USER 
GO
ALTER DATABASE [avaliacaoMercado] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [avaliacaoMercado] SET DB_CHAINING OFF 
GO
ALTER DATABASE [avaliacaoMercado] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [avaliacaoMercado] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [avaliacaoMercado] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [avaliacaoMercado] SET QUERY_STORE = OFF
GO
USE [avaliacaoMercado]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 31/05/2021 00:43:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 31/05/2021 00:43:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Price] [money] NOT NULL,
	[Image] [varchar](200) NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210529213027_Inicial', N'3.1.5')
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Id], [Name], [Price], [Image]) VALUES (1, N'Celular XR', 1220.0000, N'1c246d44-9e67-42eb-b3e1-9f8444d19ef2_download (1).jpg')
INSERT [dbo].[Products] ([Id], [Name], [Price], [Image]) VALUES (2, N'test', 120.0000, N'd39d27ea-d3d9-4ad3-b4f8-3d2b34fce9b4_download.jpg')
INSERT [dbo].[Products] ([Id], [Name], [Price], [Image]) VALUES (3, N'Bookmark', 1200.0000, N'45ea04d1-fb7d-4b01-9044-24be9eba16ec_download (2).jpg')
INSERT [dbo].[Products] ([Id], [Name], [Price], [Image]) VALUES (4, N'zelda', 1000.0000, N'a887e784-0314-47a6-9717-586fa6874654_612032.jpg')
SET IDENTITY_INSERT [dbo].[Products] OFF
USE [master]
GO
ALTER DATABASE [avaliacaoMercado] SET  READ_WRITE 
GO
