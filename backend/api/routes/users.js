var express = require("express");
var router = express.Router();

const url = "mongodb://localhost:27017";
const mongo = require("mongodb").MongoClient;

let db, employees;

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err);
      return;
    }
    db = client.db("manager_db");
    employees = db.collection("emplyees");
  }
);

/* GET users listing. */
router.get("/", function (req, res, next) {
  employees.find().toArray((err, items) => {
    if (err) {
      console.error(err);
      res.status(500).json({ err: err });
      return;
    }

    const chunkSize = 25;
    let listOfElements = [];
    items.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
    for (let i = 0; i < items.length; i += chunkSize) {
      const chunk = items.slice(i, i + chunkSize);
      listOfElements.push(chunk);
    }

    res.status(200).json({ employees: listOfElements });
  });
});

/* POST emp */
router.post("/", function (req, res, next) {
  const employee = req.body;

  employees.insertOne(employee, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ err: err });
      return;
    }
    console.log(result);
    res.status(200).json({ ok: true });
  });
});

router.post("/insertList", function (req, res, next) {
  const employee = req.body;

  employees.insert(employee, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ err: err });
      return;
    }
    console.log(result);
    res.status(200).json({ ok: true });
  });
});

router.put("/:id", function (req, res, next) {
  var userId = req.params;
  const employee = req.body;
  const query = { enterpriseID: userId.id };

  console.log(query);
  console.log(employee);

  employees.updateOne(
    query,
    {
      $set: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        birthDay: employee.birthDay,
        gender: employee.gender,
        departament: employee.departament,
        position: employee.position,
        salary: employee.salary,
        startDate: employee.startDate,
        endDate: employee.endDate,
      },
    },
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ err: err });
        return;
      }
      console.log(result);
      res.status(200).json({ ok: true });
    }
  );
});

router.delete("/:id", function (req, res, next) {
  var userId = req.params;
  const query = { enterpriseID: userId.id };

  employees.deleteOne(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ err: err });
      return;
    }
    console.log(result);
    res.status(200).json({ ok: true });
  });
});

module.exports = router;
