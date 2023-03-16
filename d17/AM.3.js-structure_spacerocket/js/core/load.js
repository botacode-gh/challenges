import { getRocket } from "./rocket.js";

export function loadPayload(satellite) {
  console.log(`Loading ${satellite.id} to payload...`);

  const rocket = getRocket();
  if (rocket.liftoff || rocket.countdown > 0) {
    throw new Error(
      `Cannot load ${satellite.id}. Make sure to load before countdown or liftoff.`
    );
  }

  if (rocket.payload.length >= 2) {
    throw new Error(`Cannot load ${satellite.id}. Max payload reached.`);
  }

  console.log(`${satellite.id} loaded to payload`);
  rocket.payload.push(satellite);
}
