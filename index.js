const bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash('123123', saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});