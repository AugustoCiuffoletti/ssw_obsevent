// Calcola l'intervallo (in ms) dall'ultimo click
import { fromEvent, Observable } from "rxjs";

var t0: number = 0;
function eventCallback(e: Event) {
  let t1: number = e.timeStamp;
  console.log(t1 - t0);
  t0 = t1;
}
const button: HTMLElement = document.getElementById("myButton");
const obs: Observable<Event> = fromEvent(button, "click");
obs.subscribe({
  next: eventCallback
});
