
var __DEV__ = true;
var __fastpack_cache__ = {};

function __fastpack_require__(f) {
  if (__fastpack_cache__[f.name] === undefined) {
    __fastpack_cache__[f.name] = f();
  }
  return __fastpack_cache__[f.name];
}

function __fastpack_import__(f) {
  return new Promise((resolve, reject) => {
    try {
      resolve(__fastpack_require__(f));
    } catch (e) {
      reject(e);
    }
  });
}

/* a */

let $e__a__a1 = "Тест";
let $e__a__a2 = "Привет, мир";
let $e__a__a3 = "哈囉世界";
const $e__a__default = {a1: $e__a__a1, a2: $e__a__a2, a3: $e__a__a3};

const $n__a = {default: $e__a__default, a1: $e__a__a1, a2: $e__a__a2, a3: $e__a__a3};

/* index */


const $e__index__default = function() {
  console.log("Русский", "development",
              "разработка");
}

const $n__index = {default: $e__index__default};
