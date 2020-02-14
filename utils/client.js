'use strict';

const got = require('got');

const client = function (endpoint, apiKey) {
    this.endpoint = endpoint;
    this.apiKey = apiKey;
};

client.prototype.fetch = async function (title) {
    let response;
    try {
        response = await got(`${this.endpoint}/?apikey=${this.apiKey}&t=${title}`);
        response = JSON.parse(response.body);
    } catch (error) {
        console.warn(error);
        throw new Error('Could not fetch additional movie info');
    }

    if (response.Error) {
        throw new Error(response.Error);
    }
    return response;
};

exports.client = client;
