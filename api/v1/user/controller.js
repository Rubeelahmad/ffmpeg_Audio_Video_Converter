const failure = require('../../../public/javascripts/failure');
const success = require('../../../public/javascripts/success');
// const { createJWT } = require("../../../utils/create-token");
const userValidation = require('./validation');
const dotenv = require('dotenv');

dotenv.config();

exports.getAllUsers = async (req, res) => {
    try {
        console.log("Users::::::::::::", process.env.USER_NAME, process.env.DATABASE,)
        const success_200 = success.success_range_200.success_200;
        success_200.items = [];
        return res.status(success_200.code).send(success_200)

    } catch (error) {
        console.log("Error::::::::: ", error);
        const failure_500 = failure.failure_range_500.failure_500;
        failure_500.items = error;
        return res.status(failure_500.code).send(failure_500);
    }
}
