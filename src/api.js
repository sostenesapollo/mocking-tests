const fetch = require("cross-fetch")
const uuid = require('uuid')

exports.getProfile = () => {
    return fetch('https://api.github.com/users/sostenesapollo')
}

exports.getId = async () => {
    return uuid.v4()
}