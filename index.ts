// Calcola l'intervallo (in ms) dall'ultimo click
import { Observable, fromEvent } from "rxjs";

var t0 = 0;
function eventCallback(e) {
  let t1 = e.timeStamp;
  console.log(t1 - t0);
  t0 = t1;
}
const button = document.getElementById("myButton");
const obs = fromEvent(button, "click");
obs.subscribe({
  next: eventCallback
});
