import {
  BehaviorSubject,
  combineLatest,
  combineLatestWith,
  repeat,
  debounceTime,
  fromEvent,
  interval,
  map,
  mapTo,
  skip,
  startWith,
  tap,
  Observable,
  of,
  Subject,
  merge,
  scan,
  from,
} from "rxjs";
import { UserInfo } from "./users/user";

const userInfo = new UserInfo()
const userAgeChanges = fromEvent<KeyboardEvent>( document.getElementById("userage")!, "change").pipe(
 map((event: KeyboardEvent) =>  (event.target as HTMLInputElement).value),
 tap( v => userInfo.addUserState.next({id:1,name:'john',age: parseInt(v)}))
).subscribe()
//userInfo.vmChange.subscribe((v => console.log("users change",v))
userInfo.getUsersChange.subscribe(v => console.log("users change", JSON.stringify(v)))

// userInfo.addUserState.next(userAgeChanges)
// start butto
// const startChanges = fromEvent(
//   document.getElementById("start")!,
//   "click"
// ).pipe(); //.subscribe(console.log)
// .pipe(
//     mapTo(initialCountState),
//     combineLatestWith(interval(1000)),
//     map(([state,index]) => ({...state, count: state.count += state.step }))
// )//.subscribe(v => console.log(v))

// pause button
//const pauseChanges = fromEvent(document.getElementById("pause")!, "click");

// const pauseOrStart = combineLatest(startChanges, pauseChanges).pipe(

// )
// stop button

// reset button

// change up/dow

// change step (diff)

// change speed


