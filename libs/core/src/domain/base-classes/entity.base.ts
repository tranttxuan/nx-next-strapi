import { ArgumentInvalidException } from '../../exceptions/argument-invalid.exception';
import { ArgumentNotProvidedException } from '../../exceptions/argument-not-provided.exception';
import { Guard } from '../guard';
import { ID } from '../value-objects/id.value-object';

export interface BaseEntityProps {
  id: ID;
}
export interface CreateEntityProps<T> {
  id: ID;
  props: T;
}

export abstract class Entity<EntityProps> {
  protected readonly props: EntityProps;
  protected abstract _id: ID;

  constructor({ id, props }: CreateEntityProps<EntityProps>) {
    this.setId(id);
    this.validateProps(props);
    this.props = props;
  }

  private setId(id:ID){
      return this._id = id;
  }

  private validateProps(props: EntityProps){
    if (Guard.isEmpty(props)) {
        throw new ArgumentNotProvidedException(
          'Entity props should not be empty',
        );
      }
      if (typeof props !== 'object') {
        throw new ArgumentInvalidException('Entity props should be an object');
      }
  }

  public getPropsCopy(): EntityProps & BaseEntityProps {
    const propsCopy = {
      id: this._id,
      ...this.props,
    };
    return Object.freeze(propsCopy);
  }

}
