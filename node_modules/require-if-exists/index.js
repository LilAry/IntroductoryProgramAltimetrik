/**
 * Synchronously import module without throwing error if it's not found
 * @param {string} path
 * @returns {*}
 */
module.exports = function requireIfExists(path) {
  let module
  try { module = require(`${path}`) } catch (e) {}
  return module
}
