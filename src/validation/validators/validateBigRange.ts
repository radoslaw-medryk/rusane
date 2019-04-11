import { ValidationResult } from "../ValidationResult";
import { noError } from "../helpers/noError";
import Big from "big.js";
import { BigRangeError, BigRangeErrorType } from "../errors/BigRangeError";

type ValidateBigRangeRule = {
    minValue?: Big;
    maxValue?: Big;
};

const bigRangeError = (value: Big, rule: ValidateBigRangeRule, key?: string): ValidationResult => {
    const error: BigRangeError = {
        type: BigRangeErrorType,
        key: key,
        value: value,
        minValue: rule.minValue,
        maxValue: rule.maxValue,
    };

    return {
        error: error,
    };
};

export const validateBigRange = (rule: ValidateBigRangeRule) => (value: Big, key?: string): ValidationResult => {
    if (rule.minValue !== undefined && value.lt(rule.minValue)) {
        return bigRangeError(value, rule, key);
    }

    if (rule.maxValue !== undefined && value.gt(rule.maxValue)) {
        return bigRangeError(value, rule, key);
    }

    return noError();
};
