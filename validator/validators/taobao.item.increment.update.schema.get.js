'use strict'
module.exports = function(args, check) {
  check(args, "category_id", "Number");
  check(args, "item_id", "Number", true);
  check(args, "update_fields", "String");
}
