import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-a4bd4e8d.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["simple-button",[[1,"simple-button",{"buttonType":[1,"button-type"]}]]]], options);
});
