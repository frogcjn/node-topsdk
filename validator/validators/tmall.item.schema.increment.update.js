'use strict'
module.exports = function(args, check) {
  check(args, "item_id", "Number", true);
  check(args, "xml_data", "String", true);
}
