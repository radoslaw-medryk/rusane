import { ValidationResult } from "../ValidationResult";
import { noError } from "../helpers/noError";
import { EmailError, EmailErrorType } from "../errors/EmailError";

const emailError = (key?: string): ValidationResult => {
    const error: EmailError = {
        type: EmailErrorType,
        key: key,
    };

    return {
        error: error,
    };
};

export const validateEmail = (value: string, key?: string): ValidationResult => {
    if (!/[^@]+@[^\.]+\..+/.test(value)) {
        return emailError(key);
    }

    return noError();
};
