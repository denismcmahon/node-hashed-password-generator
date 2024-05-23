const bcrypt = require('bcrypt');
const saltRounds = 10;
const plainPassword = '5n*loxwh';

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }
  console.log('Hashed password:', hash);
});