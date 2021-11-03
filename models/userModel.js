'use strict';
const pool = require('../database/db');
const { httpError } = require('../utils/errors');
const promisePool = pool.promise();

const getAllUsers = async (next) => {
  try {
    const [rows] = await promisePool.execute(
      'SELECT user_id, name, email, role FROM wop_user'
    );
    return rows;
  } catch (e) {
    console.error('getAllUsers error', e.message);
    next(httpError('Database error', 500));
  }
};

const getUser = async (id, next) => {
  try {
    const [rows] = await promisePool.execute(
      'SELECT user_id, name, email, role FROM wop_user WHERE user_id = ?',
      [id]
    );
    return rows;
  } catch (e) {
    console.error('getAllUsers error', e.message);
    next(httpError('Database error', 500));
  }
};

module.exports = {
  getAllUsers,
  getUser,
};
