const express = require("express");
const { db } = require("../model/dbConfig");

const router = express();

router.get("/", (req, res) => {
  const sqlQuery = "SELECT * FROM user";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/:id", (req, res) => {
  const sqlQuery = `SELECT * from user WHERE user_id = ${req.params.id}`;
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/", (req, res) => {
  const payload = req.body;
  const sqlQuery = `INSERT INTO user(user_name, user_email, user_password) VALUE(?,?,?)`;
  db.query(
    sqlQuery,
    [payload.user_name, payload.user_email, payload.user_password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const payload = req.body;
  const sqlQuery = `UPDATE user SET user_name = '${payload.user_name}' WHERE user_id = ${req.params.id}`;
  console.log(sqlQuery);
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.delete("/:email", (req, res) => {
  const sqlQuery = "DELETE FROM user WHERE user_email = ?";
  db.query(sqlQuery, [req.params.email], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
