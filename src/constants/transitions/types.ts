/* @constants/transitions/types.ts */

// local
import { transitions } from "./transitions";

type TimingTransitions = keyof typeof transitions.timing;
type SpringTransitions = keyof typeof transitions.spring;
type Transitions = TimingTransitions | SpringTransitions;

export type { TimingTransitions, SpringTransitions, Transitions };