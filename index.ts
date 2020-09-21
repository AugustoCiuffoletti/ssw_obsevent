// Calcola l'intervallo (in ms) dall'ultimo click
import { Observable, fromEvent } from 'rxjs';

var t0=0
const button = document.getElementById('myButton');
const myObservable = fromEvent(button, 'click');
const subscription = myObservable.subscribe(
	(event) => {
		var t1=event.timeStamp;
		console.log(t1-t0);
		t0=t1
	}
);
