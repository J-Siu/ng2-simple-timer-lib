A simple timer service for Angular, base on RxJS.
<!--more-->

Name/ID(string) base API. RxJS object not exposed.

> __ng2-simple-timer__ uses to Angular CLI starting 8.2.0. New repository https://github.com/J-Siu/ng2-simple-timer-lib/ contains both library and example.
>
> Version < 8.2.0 are in old repository https://github.com/J-Siu/ng2-simple-timer/

<!-- TOC -->

- [Install](#install)
- [Usage](#usage)
  - [Module](#module)
  - [Component](#component)
- [API](#api)
  - [newTimer](#newtimer)
  - [newTimerCD](#newtimercd)
  - [newTimerHR](#newtimerhr)
  - [delTimer](#deltimer)
  - [getTimer](#gettimer)
  - [getSubscription](#getsubscription)
  - [subscribe](#subscribe)
  - [unsubscribe](#unsubscribe)
- [Example](#example)
- [Repository](#repository)
- [Contributors](#contributors)
- [Changelog](#changelog)
- [License](#license)

<!-- /TOC -->

### Install

```sh
npm install ng2-simple-timer
```

### Usage

__ng2-simple-timer__ is implemented as Angular injectable service name __SimpleTimer__.

#### Module

Add `SimpleTimer` into module providers (eg. [app.module.ts](https://github.com/J-Siu/ng2-simple-timer-example/blob/master/app/app.module.ts)).

```javascript
import { SimpleTimer } from 'ng2-simple-timer';

@NgModule({
  providers: [SimpleTimer]
})
```

#### Component

```javascript
import {SimpleTimer} from 'ng2-simple-timer';

export class ChildComponent {

  constructor(private st: SimpleTimer) { }

}
```

### API

#### newTimer

Create timer with optional delay start. Unit in second.

`newTimer(name: string, sec: number, delay: boolan = false): boolean`

`newTimer` will create timer `name` and tick every 'number' of seconds. Creating timer with the same name multiple times has no side effect.

`delay`: If set to true will delay the 1st tick till the end of the first interval.

Return `false` if timer `name` exist.

```javascript
this.st.newTimer('5sec', 5);
this.st.newTimer('5sec', 5, true);
```

#### newTimerCD

Create timer with optional customer delay. Unit in second.

`newTimerCD(name: string, sec: number, delay: number = 0): boolean`

`newTimerCD` will create timer `name` and tick every 'number' of seconds. Creating timer with the same name multiple times has no side effect.

`delay`: If set to X, will delay the 1st tick for X seconds.

Return `false` if timer `name` exist.

```javascript
this.st.newTimerCD('5sec', 5);
this.st.newTimerCD('5sec', 5, 10);
```

#### newTimerHR

Create High Resolution timer with optional customer delay. Unit in millisecond.

`newTimerHR(name: string, msec: number, delay: number = 0): boolean`

`newTimerHR` will create timer `name` and tick every 'number' of milliseconds. Creating timer with the same name multiple times has no side effect.

`delay`: If set to X, will delay the 1st tick for X milliseconds.

Return `false` if timer `name` exist.

```javascript
this.st.newTimerHR('5ms', 5);
this.st.newTimerHR('5ms', 5, 10);
```

#### delTimer

`delTimer(name: string): boolean`

`delTimer` will delete timer `name`

Return `false` if timer `name` does not exist.

```javascript
this.st.delTimer('5sec');
```

#### getTimer

`getTimer(): string[]`

`getTimer` will return all timer name in string array.

```javascript
let t: string[] = this.st.getTimer();
```

#### getSubscription

`getSubscription(): string[]`

`getSubscription` will return all subscription id in string array.

```javascript
let ids: string[] = this.st.getSubscription();
```

#### subscribe

`subscribe(name: string, callback: () => void): string`

`subscribe` will link `callback` function to timer `name`. Whenever timer `name` tick, `callback` will be invoked.

Return subscription id(string).

Return empty string if timer `name` does not exist.

Either use Lambda(fat arrow) in typescript to pass in callback or bind `this` to another variable in javascript, else `this` scope will be lost.

__Lambda(fat arrow)__

```javascript
counter: number = 0;
timerId: string;

ngOnInit() {
  // lazy mode
  this.timerId = this.st.subscribe('5sec', () => this.callback());
}

callback() {
  this.counter++;
}
```

#### unsubscribe

`unsubscribe(id: string): boolean`

`unsubscribe` will cancel subscription using `id`.

`unsubscribe` will return false if `id` is undefined or `id` is not found in subscription list.

```javascript
timerId: string;

this.st.unsubscribe(this.timerId);
```

### Example

You will need Angular CLI to build the library and run the example.

```sh
git clone https://github.com/J-Siu/ng2-simple-timer-lib.git
cd ng2-simple-timer-lib
npm i
ng build ng2-simple-timer
ng serve --open
```

### Repository

- [ng2-simple-timer-lib](https://github.com/J-Siu/ng2-simple-timer-lib)

### Contributors

- [John Sing Dao Siu](https://github.com/J-Siu)

### Changelog

- 0.2.0
  - Angular 2 RC4
- 0.2.2
  - API change
  - newTimer() return boolean
  - subscribe() - lazy mode removed
  - API new
  - delTimer()
- 0.2.3
  - Support Angular 2 RC5
- 0.2.4
  - Remove module, export `SimpleTimer` only
- 1.2.4
  - Support Angular 2.0.0
  - Clean up package
- 1.2.5
  - Add Plunker example
- 1.2.7
  - Support Angular 2.4.*
  - Replace node-uuid with uuid
- 1.2.8
  - Change uuid as dependency
- 1.2.9
  - Replace uuid with angular2-uuid
- 1.3.0
  - Add instruction for `"noImplicitAny": false`
  - Clean up package
- 1.3.1
  - Due to the rapid release cycle of Angular, to minimize update purely due to `peerDependencies`, it is modified as follow:
    `"peerDependencies": { "@angular/core": ">=2.4.0" }`
- 1.3.2
  - Update package.json for Angular 4.3.1. For Angular 2.x.x, please use 1.3.1 or earlier.
  - Fix readme example code syntax error.
  - API change:
    `subscribe(name: string, callback: (any) => void): string` change to `subscribe(name: string, callback: () => void): string`
- 1.3.3
  - Fix readme example code for `subscribe`
- 1.3.4
  - Add `delay` option for `newTimer`
- 1.3.5
  - Bug fix for `newTimer`
  - 6.0.0
  - Update for Angular 6.x, which include moving from RxJS 5.1 to 6.0
  - Update version to match major version of Angular
- 8.2.0
  - Support Angular 8.2.0
  - Switch to Angular Cli for faster update
  - Include example
- 8.2.1
  - README.md clean up
- 8.2.2
  - New APIs
    - `newTimerCD` Create timer with optional custom delay start. Unit in second.
    - `newTimerHR` Create timer with optional custom delay start. Unit in millisecond.

### License

The MIT License

Copyright (c) 2019

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
