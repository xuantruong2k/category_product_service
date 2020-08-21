'use strict'

const crypto = require('crypto');

module.exports = {

    isEmpty: (value) => {
        if (value == null || value == undefined || value == "")
            return true;
        return false;
    },
    // random a
    random: (length) => {
        if (length % 2 == 0) {
            return crypto.randomBytes(length / 2).toString('hex');
        } else {
            return (crypto.randomBytes(length).toString('hex')).substr(0, length);
        }
    },
}