"use strict";

IntlMessageFormat.__addLocaleData({ "locale": "ckb", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";return n == 1 ? "one" : "other";
  } });
IntlMessageFormat.__addLocaleData({ "locale": "ckb-IR", "parentLocale": "ckb" });