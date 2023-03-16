import { getRocket } from "./rocket.js";

export function countdown() {
  const rocket = getRocket();
  if (rocket.liftoff) {
    throw new Error(
      "Cannot start countdown. Make sure to countdown before liftoff."
    );
  }

  if (rocket.countdown >= rocket.requiredCountdown) {
    rocket.countdown = 0;
    throw new Error(
      `Countdown too long. Make sure set a countdown length of ${rocket.requiredCountdown} to follow protocol.`
    );
  }

  rocket.countdown++;
  console.log(
    rocket.countdown === 1
      ? "T minus " + 5
      : rocket.countdown === 2
      ? "T minus " + 4
      : rocket.countdown === 3
      ? "T minus " + 3
      : rocket.countdown === 4
      ? "T minus " + 2
      : rocket.countdown === 5
      ? "T minus " + 1
      : "Lift off!"
  );
}
