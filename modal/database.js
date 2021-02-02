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
  "DROP DATABASE IF EXISTS infinity; CREATE DATABASE infinity; USE infinity;"
  + "CREATE TABLE `login` (`id` INT(255) NOT NULL AUTO_INCREMENT,`username` varchar(50) NOT NULL,`password` varchar(20) NOT NULL,PRIMARY KEY (`id`));"
  + "CREATE TABLE `planet` (`id` INT(255) NOT NULL AUTO_INCREMENT,`name` varchar(255) NOT NULL,PRIMARY KEY (`id`));"
  + "CREATE TABLE `message` (`id` INT(255) NOT NULL AUTO_INCREMENT,`planet_id` INT(255) NOT NULL,`message` varchar(255) NOT NULL,PRIMARY KEY (`id`));"
  + "CREATE TABLE `quiz` (`id` INT(255) NOT NULL AUTO_INCREMENT,`questions` varchar(255) NOT NULL,`user_id` INT(255) NOT NULL,`answers` varchar(255) NOT NULL,`score` INT(255) NOT NULL,PRIMARY KEY (`id`));"
  + "CREATE TABLE `user` (`id` INT(255) NOT NULL AUTO_INCREMENT,`score` INT(255) NOT NULL,`message_id` INT(255) NOT NULL,`login_id` INT(255) NOT NULL,PRIMARY KEY (`id`));"
  + "ALTER TABLE `message` ADD CONSTRAINT `message_fk0` FOREIGN KEY (`planet_id`) REFERENCES `planet`(`id`);"
  + "ALTER TABLE `quiz` ADD CONSTRAINT `quiz_fk0` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);"
  + "ALTER TABLE `user` ADD CONSTRAINT `user_fk0` FOREIGN KEY (`score`) REFERENCES `quiz`(`id`);"
  + "ALTER TABLE `user` ADD CONSTRAINT `user_fk1` FOREIGN KEY (`message_id`) REFERENCES `message`(`id`);"
  + "ALTER TABLE `user` ADD CONSTRAINT `user_fk2` FOREIGN KEY (`login_id`) REFERENCES `login`(`id`);"
  let sqlInsert = "INSERT INTO login(username, password) VALUES (‘KittyPaw’, 'kittypaw@gmail.com’);"
  // + “INSERT INTO user(login_id, score, message_id) VALUES (‘1’, ‘5’, ‘Is it cold there?’);”
  + "INSERT INTO planet (name) VALUES (‘Mercury’), (‘Venus’), (‘Earth’), (‘Mars’), (‘Jupiter’), (‘Saturn’), (‘Uranus’), (‘Neptune’), (‘Pluto’);"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tables creation `infinity` db were successful!");

    console.log("Closing...");
  });

  con.end();
});


// + "CREATE TABLE `login` (`id` INT(255) NOT NULL AUTO_INCREMENT,`username` varchar(50) NOT NULL,`password` varchar(20) NOT NULL,`email` varchar(20) NOT NULL,PRIMARY KEY (`id`));"
// + "CREATE TABLE `planet` (`id` INT(255) NOT NULL AUTO_INCREMENT,`name` varchar(255) NOT NULL,`descriptions` varchar(255) NOT NULL,`distance_to_orbit` varchar(255) NOT NULL,`distance_to_sun` varchar(255) NOT NULL,`login_id` INT(255) NOT NULL,PRIMARY KEY (`id`));"
// + "CREATE TABLE `message` (`id` INT(255) NOT NULL AUTO_INCREMENT,`login_id` INT(255) NOT NULL,`planet_id` INT NOT NULL,`text` varchar(255) NOT NULL,PRIMARY KEY (`id`));"
// + "ALTER TABLE `planet` ADD CONSTRAINT `planet_fk0` FOREIGN KEY (`login_id`) REFERENCES `login`(`id`);"
// + "ALTER TABLE `message` ADD CONSTRAINT `message_fk0` FOREIGN KEY (`login_id`) REFERENCES `login`(`id`);"
// + "ALTER TABLE `message` ADD CONSTRAINT `message_fk1` FOREIGN KEY (`planet_id`) REFERENCES `planet`(`id`);";