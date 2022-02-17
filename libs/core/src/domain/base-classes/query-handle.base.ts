import { Result } from '../utils/result.util';

export abstract class Query {}

export abstract class QueryHandlerBase {
    abstract handle(query?: Query): Promise<Result<unknown>>;
  
    execute(query?: Query): Promise<Result<unknown>> {
      return this.handle(query);
    }
  }
  