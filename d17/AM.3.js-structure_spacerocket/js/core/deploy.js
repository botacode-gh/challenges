import { getRocket } from "./rocket.js";

export function deployPayload() {
  console.log("Deploying payload...");

  const rocket = getRocket();
  if (!rocket.liftoff) {
    throw new Error("Cannot deploy payload while still on ground.");
  }

  if (!rocket.payload.length) {
    throw new Error(
      "No payload found. Make sure to load payload before deploying."
    );
  }

  rocket.payloadDeployed = true;
  console.log("Payload deployed");
}
