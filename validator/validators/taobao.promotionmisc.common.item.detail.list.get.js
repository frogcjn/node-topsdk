'use strict'
module.exports = function(args, check) {
  check(args, "activity_id", "Number", true);
  check(args, "page_no", "Number", true);
  check(args, "page_size", "Number", true);
}
