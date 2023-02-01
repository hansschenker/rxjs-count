import { map, Subject } from "rxjs";
import {
  CountState,
  CountAction,
  initialCountState,
} from "../timerstate/timerstate";

interface ICounterVm {
  counter: number;
}

type CountReducer = (vm: ICounterVm) => ICounterVm;

class Counter {
  public incrSubj = new Subject<number>();
  public decrSubj = new Subject<number>();
  constructor() {
    // the subjects are mapped to an anonymous function that
    // - accepts as parameter the previous state of the viewmodel (vm:ICounterVm)
    // - and that returns the mutated viewmodel
    // they are the viewmodel mutation functions
    const incr$ = this.incrSubj.pipe(
      map((delta) => (vm: ICounterVm) => ({
        ...vm,
        counter: vm.counter + delta,
      }))
    );
    const decr$ = this.decrSubj.pipe(
      map((delta) => (vm: ICounterVm) => ({
        ...vm,
        counter: vm.counter - delta,
      }))
    );
  } // end constructor
  update(state: CountState, action: CountAction) {
    switch (action.kind) {
      case "start":
        return state;
      case "pause":
        return state;
      case "reset":
        return { ...initialCountState };
      case "update":
        return { ...state, count: state.count + action.step };
      case "set":
        return state;
      case "speed":
        return state;
      case "direction":
        return state;
    }
  }

  render(state: CountState) {
    console.log("count state: " + JSON.stringify(state));
  }
} // end class Counter
