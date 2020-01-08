export type Key = number | string;

export interface IOption {
  key: Key;
  label: string;
  value: any;
}

export class Options {
  persisted: { [key: string]: IOption } = {};
  found: { [key: string]: IOption } = {};
}