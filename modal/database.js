require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "infinity", // changed into a new database from `makanbah` to `makanbahDB`
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // let sql = "DROP TABLE IF exists items; CREATE TABLE items(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id)); "; // change this too
  let sql = 
  "DROP database IF exists makanbahDB; create database makanbahDB; use makanbahDB;"
  + "CREATE TABLE `restaurants` (`id` INT(25) NOT NULL AUTO_INCREMENT,`name` varchar(50) NOT NULL,`formatted_address` varchar(255) NOT NULL,`rating` varchar(50) NOT NULL,PRIMARY KEY (`id`));"
  + "CREATE TABLE `bucket_list` (`id` INT(25) NOT NULL AUTO_INCREMENT,`restaurant_id` INT(25) NOT NULL,`complete` BOOLEAN NOT NULL,PRIMARY KEY (`id`));"
  + "CREATE TABLE `user` (`id` INT(25) NOT NULL AUTO_INCREMENT,`bucket_list_id` INT(25) NOT NULL,`firstName` varchar(255) NOT NULL,`lastName` varchar(255) NOT NULL,`email` varchar(255) NOT NULL,PRIMARY KEY (`id`));"
  + "ALTER TABLE `bucket_list` ADD CONSTRAINT `bucket_list_fk0` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants`(`id`);";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tables creation `makanbahDB` db were successful!");

    console.log("Closing...");
  });

  con.end();
});


// + "CREATE TABLE `restaurants` (`id` INT(25) NOT NULL AUTO_INCREMENT,`name` varchar(50) NOT NULL,`address` varchar(50) NOT NULL,`city` varchar(50) NOT NULL,`state` varchar(50) NOT NULL,`country` varchar(50) NOT NULL,`ratings` varchar(50) NOT NULL,`opening hours` varchar(50) NOT NULL,`api_reviews` varchar(100) NOT NULL,`type_id` INT(25) NOT NULL,PRIMARY KEY (`id`));";
//   + "CREATE TABLE `bucket_list` (`id` INT(25) NOT NULL AUTO_INCREMENT,`restaurant_id` INT(25) NOT NULL,`complete` BOOLEAN NOT NULL,`user_review` varchar(100) NOT NULL,PRIMARY KEY (`id`));";
//   + "CREATE TABLE `type` (`id` INT(25) NOT NULL AUTO_INCREMENT,`breakfast` varchar(100) NOT NULL,`lunch` varchar(100) NOT NULL,`dinner` varchar(100) NOT NULL,PRIMARY KEY (`id`));";
//   + "CREATE TABLE `user` (`id` INT(25) NOT NULL AUTO_INCREMENT,`bucket_list_id` INT(25) NOT NULL,PRIMARY KEY (`id`));";
//   + "ALTER TABLE `restaurants` ADD CONSTRAINT `restaurants_fk0` FOREIGN KEY (`type_id`) REFERENCES `type`(`id`);";
//   + "ALTER TABLE `bucket_list` ADD CONSTRAINT `bucket_list_fk0` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants`(`id`);";
//   + "ALTER TABLE `user` ADD CONSTRAINT `user_fk0` FOREIGN KEY (`bucket_list_id`) REFERENCES `bucket_list`(`id`);";