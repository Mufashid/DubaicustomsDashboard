import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
var _ = require('lodash');
var parseString = require('xml2js').parseString;

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        responeData: null,
        requestXML: null,
        responseXML: null
    },
    mutations: {
        responeData(state, data) {
            state.responeData = data.data
        },
        requestXML(state, data) {
            state.requestXML = data
        },
        responseXML(state, data) {
            state.responseXML = data
        }
    },
    actions: {
        getData({ commit }) {
            axios.get("http://localhost:5000/")
                .then((response) => {
                    commit('requestXML', response)
                    commit('responseXML', response)
                    commit('responeData', response)
                    // console.log(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    },
    getters: {
        xml2json: (state) => {
            var jsonResponse = []
            _.forEach(state.responeData, function (data) {
                var requestjson = {};
                parseString(data.request_XML, function (err, result) {
                    requestjson["request"] = result["soapenv:Envelope"]["soapenv:Body"]
                });
                parseString(data.response_XML, function (err, result) {
                    requestjson["response"] = result["env:Envelope"]["env:Body"]

                });
                jsonResponse.push(requestjson)
            });
            return jsonResponse;
        }
    }
});