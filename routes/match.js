if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const axios = require("axios");

const router = express.Router();

const Match = require("../models/matches");
const CrushFrom = require("../models/crushFrom");
const Connection = require("../models/connection");
const CrushTo = require("../models/crushTo");
const { create } = require("../models/matches");

// user_id Anuj
// crush Rashmika
async function createConnection(user_id, crush) {
  // for user
  Connection.exists({ user_id }, async function (err, connection) {
    if (err) console.log(err);
    else {
      if (connection) {
        let UserConnection = await Connection.findOne({ user_id: user_id });
        let obj = UserConnection.connections;
        var newobj = {};
        newobj[crush] =  {
                status: "pending",
                superlike: "NA",
                }
        obj.push(newobj)
        UserConnection.save();
        console.log({ UserConnection });
        console.log("Connection created");
      } else {
        let obj = {};
        obj[crush] = {
          status: "pending",
          superlike: "NA",
        };
        let UserResponse = await Connection.create({
          user_id: user_id,
          connections: obj,
        });
        // console.log({ UserResponse });
      }
    }
  });
  // for crush

  Connection.exists({ user_id: crush }, async function (err, connection) {
    if (err) console.log(err);
    else {
      if (connection) {
        let UserConnection = await Connection.findOne({ user_id: crush });
        let obj = UserConnection.connections;
        var newobj = {};
        newobj[user_id] =  {
                status: "pending",
                superlike: "NA",
                }
        obj.push(newobj)
        UserConnection.save();
        console.log({ UserConnection });
        console.log("Connection created");
      } else {
        let obj = {};
        obj[user_id] = {
          status: "pending",
          superlike: "NA",
        };
        let UserResponse = await Connection.create({
          user_id: crush,
          connections: obj,
        });

      }
    }
  });
}

router.post("/", async (req, res) => {
  try {
    let { user_id, crush } = req.body;
    CrushTo.exists(
      { user_id: crush, crush_to_id: user_id },
      async function (err, match) {
        if (err) {
          console.log(err);
        } else {
          if (match) {
            await Match.create({
              male_id: crush,
              female_id: user_id,
            });
            createConnection(user_id, crush);
            res.send({ status: 200, msg: "It's a Match" });
            CrushTo.deleteOne({ user_id: crush, crush_to_id: user_id })
              .then(function () {
                console.log({ crushTo: "Data deleted" });
                CrushFrom.deleteOne({ user_id, crush_from_id: crush }).then(
                  function () {
                    console.log({ crushFrom: "Data deleted" }); // Success
                  }
                ); // Success
              })
              .catch(function (error) {
                console.log(error); // Failure
              });
          } else {
            try {
              let { user_id, crush } = req.body;
              let crushTo = await CrushTo.create({
                user_id,
                crush_to_id: crush,
              });
              let crushFrom = await CrushFrom.create({
                user_id: crush,
                crush_from_id: user_id,
              });
              res.send({ status: 200, crushTo, crushFrom });
            } catch (err) {
              return res.send({ status: 400, msg: err.message });
            }
          }
        }
      }
    );
  } catch (err) {
    return res.send({ status: 400, msg: err.message });
  }
});

module.exports = router;
