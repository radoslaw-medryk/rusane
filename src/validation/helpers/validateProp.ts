import { ValidationFunc } from "../ValidationFunc";
import { ValidationResult } from "../ValidationResult";

export const validateProp = <TObj, TKey extends Extract<keyof TObj, string>>(
    obj: TObj,
    prop: TKey,
    validationFunc: ValidationFunc<TObj[TKey]>
): ValidationResult => {
    const value = obj[prop];
    return validationFunc(value, prop);
};
