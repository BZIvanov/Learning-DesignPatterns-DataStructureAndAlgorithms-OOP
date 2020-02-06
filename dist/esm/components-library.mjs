import { p as patchBrowser, b as bootstrapLazy } from './core-039c16b4.js';

patchBrowser().then(options => {
  return bootstrapLazy([["my-component_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"simple-button",{"buttonType":[1,"button-type"]}]]]], options);
});
