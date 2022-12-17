const route = require('express').Router()
const { getDoctor } = require('../../client/src/apis')
const { auth } = require('../middlewares/authMiddleware')


route.get("/doctors", getDoctor)