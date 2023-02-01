import { CountState, CountAction, initialCountState } from "./timerstate/timerstate";

function render(state: CountState) {
 console.log("count state: " + JSON.stringify(state));
}
function update(state:CountState, action:CountAction) {
    switch(action.kind) {
      case "start":
        return state
      case "pause":
        return state
      case "reset":
        return {...initialCountState }
      case "update":
         return { ...state , count: state.count + action.step }
      case  "set":
        return state
      case "speed":
        return state
      case "direction":
        return state
    }
  }