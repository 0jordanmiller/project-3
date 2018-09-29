import axios from "axios";

const BASEURL = function () {
  const key_arr = ["AIzaSyD7VAvFRakXE3BOSWUf6T3K3oCDMr8YNuk", "AIzaSyBUi2Z6D-VsZVjWdJHCjJbu67pSn35T3os", "AIzaSyAPCdmi755ma_8ypgWJd5zPe9b6UEl7UIg"];
  const key = key_arr[Math.floor(Math.random() * key_arr.length)]
  console.log(key);
  return 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=raleigh&key=' + key
}
  
const APIKEY = "AIzaSyDsSOVbrDsQef9mJXVPXBjQ8UV6jnm2iCE"
const { checkApiKey, makeRequest, buildResponse, buildResponseForPlaceDetails } = require("");
module.exports = class GooglePlace {

  constructor(APIKEY) {
    this.APIKEY = APIKEY;
  }

  getGeoLocation(postal_code) {
    checkApiKey(this.APIKEY);

    if (!postal_code)
      throw new Error('Zipcode is Required!');

    return makeRequest(baseUrl + '/regions/postal_code/json?', {
      postal_code: postal_code,
      key: this.APIKEY
    })
      .then((response) => {
        let res = JSON.parse(response.body);
        if (res.status === 'REQUEST_DENIED') throw new Error(res.error_message);
        return res.results[0].geometry.location;
      });
  }
  nearBySearch(options) {
    checkApiKey(this.APIKEY);

    if (!options.regions || !options.regions instanceof Object)
      throw new Error('Zipcode is Required!');

    return makeRequest(baseUrl + '/place/nearbysearch/json?', {
      location: `${options.regions.postal_code}`,
      radius: 10000,
      type: options.searchType,
      key: this.APIKEY
    })
      .then((response) => {
        let res = JSON.parse(response.body);
        if (res.status === 'REQUEST_DENIED') throw new Error(res.error_message);
        return buildResponse(res.results);
      });
  }
  getPlaceDetails(placeId) {
    checkApiKey(this.APIKEY);

    if (!placeId)
      throw new Error('PlaceId is Expexted!');

    return makeRequest(baseUrl + '/place/details/json?', {
      placeid: placeId,
      key: this.APIKEY
    })
      .then((response) => {
        let res = JSON.parse(response.body);
        if (res.status === 'INVALID_REQUEST') throw new Error('Invalid Request!');
        return buildResponseForPlaceDetails(res.result);
      });
  }
};
export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};