'use strict'
module.exports = function(args, check) {
  check(args, "alarm_number", "Number", true);
  check(args, "category_id", "Number", true);
  check(args, "city", "String", true);
  check(args, "cost_price", "String");
  check(args, "dealer_cost_price", "String");
  check(args, "desc", "String", true);
  check(args, "discount_id", "Number");
  check(args, "have_guarantee", "String", true);
  check(args, "have_invoice", "String", true);
  check(args, "image", "byte[]");
  check(args, "input_properties", "String");
  check(args, "is_authz", "String");
  check(args, "item_id", "Number");
  check(args, "name", "String", true);
  check(args, "outer_id", "String");
  check(args, "pic_path", "String");
  check(args, "postage_ems", "String");
  check(args, "postage_fast", "String");
  check(args, "postage_id", "Number");
  check(args, "postage_ordinary", "String");
  check(args, "postage_type", "String", true);
  check(args, "productcat_id", "Number", true);
  check(args, "properties", "String");
  check(args, "property_alias", "String");
  check(args, "prov", "String", true);
  check(args, "quantity", "Number", true);
  check(args, "retail_price_high", "String", true);
  check(args, "retail_price_low", "String", true);
  check(args, "sku_cost_prices", "String");
  check(args, "sku_dealer_cost_prices", "String");
  check(args, "sku_outer_ids", "String");
  check(args, "sku_properties", "String");
  check(args, "sku_quantitys", "String");
  check(args, "sku_standard_prices", "String");
  check(args, "spu_id", "Number");
  check(args, "standard_price", "String", true);
  check(args, "standard_retail_price", "String");
  check(args, "trade_type", "String");
}
