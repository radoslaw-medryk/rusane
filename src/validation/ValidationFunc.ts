import { ValidationResult } from "./ValidationResult";

export type ValidationFunc<TVal> = (value: TVal, key?: string) => ValidationResult;
