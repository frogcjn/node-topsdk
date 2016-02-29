'use strict'
module.exports = function(args, check) {
  check(args, "buyer_nick", "String");
  check(args, "current_page", "Number", true);
  check(args, "grade", "Number");
  check(args, "group_id", "Number");
  check(args, "max_item_num", "Number");
  check(args, "max_last_trade_time", "Date");
  check(args, "max_trade_amount", "Price");
  check(args, "max_trade_count", "Number");
  check(args, "min_item_num", "Number");
  check(args, "min_last_trade_time", "Date");
  check(args, "min_trade_amount", "Price");
  check(args, "min_trade_count", "Number");
  check(args, "page_size", "Number");
  check(args, "province", "Number");
  check(args, "relation_source", "Number");
}
