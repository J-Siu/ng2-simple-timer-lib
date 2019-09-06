import { Component, OnInit } from '@angular/core';

// Import ng2-simple-timer as SimpleTimer
import { SimpleTimer } from 'ng2-simple-timer';

@Component({
	selector: 'app-root',
	template: `
		<h3>{{title}}</h3>
		<div><button (click)="subscribeTimer0()">{{timer0button}} {{timer0Name}} timer</button>{{counter0}}</div>
		<div><button (click)="subscribeTimer1()">{{timer1button}} {{timer1Name}} timer</button>{{counter1}}</div>
		<div><button (click)="subscribeTimer2()">{{timer2button}} {{timer2Name}} timer</button>{{counter2}}</div>
		<div><button (click)="subscribeTimer3()">{{timer3button}} {{timer3Name}} timer</button>{{counter3}}</div>
		<div><button (click)="delAllTimer()">Delete all timer</button></div>`
})
export class AppComponent implements OnInit {
	title = 'Angular2 Simple Timer Service Example';

	counter0 = 0;
	timer0Id: string;
	timer0Name: string = '1 sec'
	timer0button = 'Subscribe';

	counter1 = 0;
	timer1Id: string;
	timer1Name: string = '5 sec'
	timer1button = 'Subscribe';

	counter2 = 0;
	timer2Id: string;
	timer2Name: string = '10 sec'
	timer2button = 'Subscribe';

	counter3 = 0;
	timer3Id: string;
	timer3Name: string = '100 msec'
	timer3button = 'Subscribe';

	// Define SimpleTimer as 'st'
	constructor(private st: SimpleTimer) { }

	ngOnInit() {
		this.st.newTimer(this.timer0Name, 1, true);
		this.st.newTimer(this.timer1Name, 5, true);
		this.st.newTimerCD(this.timer2Name, 10, 10); // delay 10 sec
		this.st.newTimerHR(this.timer3Name, 100, 100); // delay 0.1 sec
		this.subscribeTimer0();
		this.subscribeTimer1();
		this.subscribeTimer2();
		this.subscribeTimer3();
	}

	delAllTimer() {
		this.st.delTimer(this.timer0Name);
		this.st.delTimer(this.timer1Name);
		this.st.delTimer(this.timer2Name);
		this.st.delTimer(this.timer3Name);
	}

	subscribeTimer0() {
		if (this.timer0Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer0Id);
			this.timer0Id = undefined;
			this.timer0button = 'Subscribe';
			console.log('timer 0 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer0Id = this.st.subscribe(this.timer0Name, () => this.timer0callback());
			this.timer0button = 'Unsubscribe';
			console.log('timer 0 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	subscribeTimer1() {
		if (this.timer1Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer1Id);
			this.timer1Id = undefined;
			this.timer1button = 'Subscribe';
			console.log('timer 1 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer1Id = this.st.subscribe(this.timer1Name, () => this.timer1callback());
			this.timer1button = 'Unsubscribe';
			console.log('timer 1 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	subscribeTimer2() {
		if (this.timer2Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer2Id);
			this.timer2Id = undefined;
			this.timer2button = 'Subscribe';
			console.log('timer 2 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer2Id = this.st.subscribe(this.timer2Name, () => this.timer2callback());
			this.timer2button = 'Unsubscribe';
			console.log('timer 2 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	subscribeTimer3() {
		if (this.timer3Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer3Id);
			this.timer3Id = undefined;
			this.timer3button = 'Subscribe';
			console.log('timer 3 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer3Id = this.st.subscribe(this.timer3Name, () => this.timer3callback());
			this.timer3button = 'Unsubscribe';
			console.log('timer 3 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	timer0callback(): void {
		this.counter0++;
	}

	timer1callback(): void {
		this.counter1++;
	}

	timer2callback(): void {
		this.counter2++;
	}

	timer3callback(): void {
		this.counter3++;
	}

}
