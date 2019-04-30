import { ValidationErrorBase } from "./ValidationError";

export const EmailErrorType = Symbol("EmailError");

export type EmailError = ValidationErrorBase & {
    type: typeof EmailErrorType;
};
