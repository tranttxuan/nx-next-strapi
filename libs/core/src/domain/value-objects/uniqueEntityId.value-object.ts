import { DomainPrimitive } from "../base-classes/value-object.base";
import { ID } from "./id.value-object";
import { v4 as uuidV4 } from 'uuid';

export class UniqueEntityID extends ID{
    constructor (id?: string) {
      super(id ? id : uuidV4())
    }
    protected validate({ value }: DomainPrimitive<string>): void {}
}