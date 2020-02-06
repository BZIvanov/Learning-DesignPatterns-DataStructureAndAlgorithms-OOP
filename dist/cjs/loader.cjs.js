'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9d4238e2.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"simple-button",{"buttonType":[1,"button-type"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
