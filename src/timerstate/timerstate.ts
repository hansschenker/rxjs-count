
export type CountState = {
 ticking: boolean;
 direction: '+' | '-' ; 
 count: number;
 to: number;
 step: number;
 speed: number;
}
export const initialCountState: CountState ={
  ticking: false,
  direction: '+' ,
  count: 0 ,
  to: Infinity,
  step:1,
  speed: 1000,
}
type Keys<T> = {
  [P in keyof T]: P;
};
export type CountStateKeys = Keys<CountState>;

interface StartAction {
  kind: "start";
}
interface PauseAction {
  kind: "pause";
}
interface ResetAction {
  kind: "reset";
}
interface SetToAction {
  kind: "set";
  to: number;
}
interface UpdateAction {
  kind: "update";
  count: number;
  step: number;
}
interface SpeedAction {
  kind: "speed";
  speed: number;
}
interface DirectionAction {
  kind: "direction";
  direction: '+' | '-';
}

export type CountAction =
  | StartAction
  | PauseAction
  | ResetAction
  | SetToAction
  | SpeedAction
  | DirectionAction
  | UpdateAction;


