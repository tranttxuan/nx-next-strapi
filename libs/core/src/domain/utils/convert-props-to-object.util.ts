import { Entity } from '../base-classes/entity.base';
import { ValueObject } from '../base-classes/value-object.base';

function isEntity(obj: unknown): obj is Entity<unknown> {
    return (
      Object.prototype.hasOwnProperty.call(obj, 'toObject') &&
      Object.prototype.hasOwnProperty.call(obj, 'id') &&
      ValueObject.isValueObject((obj as Entity<unknown>).getPropsCopy().id)
    );
  }

function convertToPlainObject(item: any): any {
  if (ValueObject.isValueObject(item)) {
    return item.unpack();
  }
  if (isEntity(item)) {
    return item.toObject();
  }
  return item;
}

export function convertPropsToObject(props: any): any {
  const propsCopy = { ...props };

  for (const prop in propsCopy) {
    if (Array.isArray(propsCopy[prop])) {
      propsCopy[prop] = (propsCopy[prop] as Array<unknown>).map((item) => {
        return convertToPlainObject(item);
      });
    }
    propsCopy[prop] = convertToPlainObject(propsCopy[prop]);
  }

  return propsCopy;
}
