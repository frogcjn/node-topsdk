'use strict'
module.exports = function(args, check) {
  check(args, "item_id", "Number", true);
  check(args, "user_nick", "String", true);
}
