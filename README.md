# cancer-research-donation

## Ready API for Donation accepting 
Technology Stack: Node.js, AWS Lambda, MySQL

To install node modules for this project

### `npm install`

Create .env file and Setup ENV Variables

### `RDS_HOSTNAME`
### `RDS_USERNAME`
### `RDS_PASSWORD`
### `RDS_PORT`
### `RDS_DATABASE`

Create Database and Create Table named 'Donations'.Here is statement for create table
### `CREATE TABLE `donations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;`


Then just simply run command

### `npm start`

This API is also made for AWS Lambda you just need to zip it and paste to your aws lambda function and setting eenviornment variable and you're good to go.

