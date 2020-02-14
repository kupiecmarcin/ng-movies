'use strict';

const ValidationError = require('mongoose').Error.ValidationError;

const customError = (status, name, message) => ({ status, name, message });

exports.handleError = (err) => {

    if (err instanceof ValidationError) {
        return customError(400, err.name, err.message);
    }

    if (err.status) {
        return err;
    }

    return customError(500, 'INTERNAL ERROR', 'Something bad happened');
};

exports.MissingParamsError = (param) => ({ status: 400, name: 'MISSING PARAM', message: `Missing ${param} parameter` });
