# cancer-research-donation

## Ready API for Donation accepting 
Technology Stack: Node.js, AWS Lambda, MySQL

To install node modules for this project

```bash
npm install
```

Create .env file and Setup ENV Variables

```bash
RDS_HOSTNAME
RDS_USERNAME
RDS_PASSWORD
RDS_PORT
RDS_DATABASE
```

Create Database and Create Table named 'Donations'.Here is statement for create table

```bash
CREATE TABLE `donations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
```

Then just simply run command

```bash
npm start
```

This API is also made for AWS Lambda you just need to zip it and paste to your aws lambda function and setting eenviornment variable and you're good to go.

Here some documentation for Lambda Serverless API


```bash
Endpoint: https://9ng2szh8o6.execute-api.us-east-1.amazonaws.com/default/donation-demo?Version=2016-11-15
Method: POST
```
Body parameters 

```bash
{
  "name": "Rushi Patel",
  "mobile": "+44 9898976756",
  "email": "rushi@gmail.com",
  "amount": 1234
}
```
### Testing Lambda Function with Mocha and Lambda Tester (Unit Test)

Also implemented positive and negative test case for the donation lambda function.
1. For Successful Invocation
2. For Unsuccessful Invocation

Just simply run command
```bash
npm run test
```

Tried to make what can i make this robust.I hope you like the simple lambda function with all best practices are included.
