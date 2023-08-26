//this file is what makes valtio work

import { proxy } from "valtio";

// whatever is defined inside, can be used throughout whole app
const state = proxy({
  //provide initial object
  intro: true, //home page check
  color: "#EFBD48",
  isLogoTexture: true, //are we displaying the logo?
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
