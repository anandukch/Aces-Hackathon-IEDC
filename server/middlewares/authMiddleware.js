const asyncWrapper = require("../error/asyncWrapper")
const CustomError = require('../error/custom');
const jwt = require('jsonwebtoken');

const {
    StatusCodes,
    getReasonPhrase
} = require('http-status-codes');


const auth = async (req, res, next) => {

    try {
        // check header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer")) return next(CustomError("token not found", StatusCodes.UNAUTHORIZED))

        const token = authHeader.split(" ")[1];
        if (!token) {
            next({ status: 403, message: "auth token is missing" });
            return;
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // attach the user to the job routes
        req.user = payload.payload;
        // console.log(req.user);
        next();
    } catch (error) {
        return next(CustomError("token not found", StatusCodes.UNAUTHORIZED))
    }
};

module.exports = { auth };
