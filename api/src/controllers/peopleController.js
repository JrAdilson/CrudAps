const express = require('express');

const People = require('../models/People');

const router = express.Router();

router.get('/people', async (req, res) => {
  try {
    const people = await People.find();

    return res.status(200).json(people);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/people/:peopleId', async (req, res) => {
  try {
    const people = await People.findOne({ _id: req.params.peopleId });

    return res.status(200).json(people);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/people', async (req, res) => {
  try {
    const people = await People.create(req.body);

    return res.status(201).json(people);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put('/people/:peopleId', async (req, res) => {
  try {
    const people = await People.findOne({ _id: req.params.peopleId });

    const updatedPeople = await people.updateOne(req.body);

    return res.status(200).json(updatedPeople);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete('/people/:peopleId', async (req, res) => {
  try {
    await People.findByIdAndDelete(req.params.peopleId).then(() => {
      return res.status(204);
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = (app) => app.use('/api', router);
