'use strict'

module.exports = {

    isEmpty: (value) => {
        if (value == null || value == undefined || value == "")
            return true;
        return false;
    }
}