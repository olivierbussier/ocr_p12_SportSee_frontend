import { useState } from "react";

/**
 *
 * @param {*} url
 * @returns {Promise}
 */
const fetchAPI = (url) =>
  fetch(encodeURI(url), { headers: { Accept: "application/json" } })
    .then((response) => response.json())
    .then((response) => response.data);

/**
 * This function is needed to fetch user data
 *
 * @param {Number} userId
 * @returns {Promise}
 */
export const fetchUserData = (userId) =>
  fetchAPI(`http://localhost:3000/user/${userId}`);

/**
 * This function is needed to fetch activity user data
 *
 * @param {Number} userId
 * @returns {Promise}
 */
export const fetchActivityData = (userId) =>
  fetchAPI(`http://localhost:3000/user/${userId}/activity`);

/**
 * This function is needed to fetch user average session duration data
 *
 * @param {Number} userId
 * @returns {Promise}
 */

export const fetchAverageData = (userId) =>
  fetchAPI(`http://localhost:3000/user/${userId}/average-sessions`);

/**
 * This function is needed to fetch user performance data
 *
 * @param {Number} userId
 * @returns {Promise}
 */
export const fetchPerformanceData = (userId) =>
  fetchAPI(`http://localhost:3000/user/${userId}/performance`);
