export class API {

  baseUrl = null

  constructor(baseUrl = `http://localhost:3000/`) {
    this.baseUrl = baseUrl;
  }
  /**
   *
   * @param {*} url
   * @returns {Promise}
   */
  fetchAPI = (uri) =>
    fetch(encodeURI(this.baseUrl + uri), {
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((response) => response.data);

  /**
   * This function is needed to fetch user data
   *
   * @param {Number} userId
   * @returns {Promise}
   */
  fetchUserData = (userId) =>
    this.fetchAPI(`user/${userId}`);

  /**
   * This function is needed to fetch activity user data
   *
   * @param {Number} userId
   * @returns {Promise}
   */
  fetchActivityData = (userId) =>
    this.fetchAPI(`user/${userId}/activity`);

  /**
   * This function is needed to fetch user average session duration data
   *
   * @param {Number} userId
   * @returns {Promise}
   */

  fetchAverageData = (userId) =>
    this.fetchAPI(`user/${userId}/average-sessions`);

  /**
   * This function is needed to fetch user performance data
   *
   * @param {Number} userId
   * @returns {Promise}
   */
  fetchPerformanceData = (userId) => 
    this.fetchAPI(`user/${userId}/performance`);
}
