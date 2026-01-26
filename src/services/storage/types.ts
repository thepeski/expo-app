/* @services/storage/types.ts */

type Get = Promise<string>;
type Set = Promise<boolean>;
type Del = Promise<boolean>;
type DelIfExists = Promise<boolean>;

export type { Get, Set, Del, DelIfExists };