'use strict'
module.exports = function(args, check) {
  check(args, "nick", "String");
  check(args, "user_id", "Number");
}
