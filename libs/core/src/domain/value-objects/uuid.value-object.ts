import { DomainPrimitive } from "../base-classes/value-object.base";
import { ID } from "./id.value-object";
import { v4 as uuidV4, validate } from 'uuid';
import { ArgumentInvalidException } from "../../exceptions/argument-invalid.exception";

export class UUID extends ID {
    static generate(): UUID {
      return new UUID(uuidV4());
    }
  
    protected validate({ value }: DomainPrimitive<string>): void {
      if (!validate(value)) {
        throw new ArgumentInvalidException('Incorrect UUID format');
      }
    }
  }
  