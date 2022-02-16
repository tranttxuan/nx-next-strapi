import { ExceptionBase } from "./exception.base";
import { ExceptionCodes } from "./exception.codes";

export class ArgumentNotProvidedException extends ExceptionBase {
    readonly code = ExceptionCodes.argumentNotProvided;
  }
  