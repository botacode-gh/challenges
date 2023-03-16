// Implement the launch sequence function here and export it as the default export.
console.log("🚀 launchSequence.js initialised");

import { rocket } from "./core/rocket.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

const launch = async () => {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  fuel();

  let n = rocket.countdown;
  console.log("Commencing countdown...");
  while (n < rocket.requiredCountdown) {
    countdown();
    n++;
  }

  liftoff();

  deployPayload();

  console.log("Mission success");
};

export default launch;
