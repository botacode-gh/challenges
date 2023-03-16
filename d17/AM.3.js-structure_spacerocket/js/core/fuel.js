import { getRocket } from "./rocket.js";

export function fuel() {
  const rocket = getRocket();
  console.log(`Fuelling ${rocket.id}...`);

  if (rocket.countdown > 0) {
    throw new Error("Cannot fuel after countdown has started.");
  }

  rocket.fuel = true;
  console.log(`${rocket.id} fuelled`);
}
