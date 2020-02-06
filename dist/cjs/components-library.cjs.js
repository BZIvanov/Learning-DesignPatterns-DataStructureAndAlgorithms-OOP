'use strict';

const core = require('./core-9d4238e2.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"simple-button",{"buttonType":[1,"button-type"]}]]]], options);
});
