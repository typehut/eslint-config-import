const config = require("../");
const test = require("tape");

test("test basic properties of config", function (t) {
  t.ok(isObject(config.plugins));
  t.ok(isObject(config.rules));
  t.end();
});

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
