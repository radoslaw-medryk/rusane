import { failedParseObject } from "../helpers/failedParseObject";
import { successfulParse } from "../helpers/successfulParse";
import { ParseFunc } from "../ParseFunc";
import { missingValueError } from "../helpers/missingValueError";

export type ObjectType = {
    [key: string]: any | undefined;
};

export const parseObject: ParseFunc<ObjectType> = (value: any, key?: string) => {
    if (value === null || value === undefined) {
        return missingValueError(key);
    }

    if (typeof value !== "object") {
        return failedParseObject(key);
    }

    return successfulParse(value);
};

export const parseOptionalObject: ParseFunc<ObjectType | undefined> = (value: any, key?: string) => {
    if (value === null || value === undefined) {
        return successfulParse(undefined);
    }

    return parseObject(value, key);
};
