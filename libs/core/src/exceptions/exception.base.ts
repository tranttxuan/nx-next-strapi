export interface SerializedException {
    message: string;
    code: string;
  }
  export abstract class ExceptionBase extends Error {

    constructor(readonly message: string) {
      super(message);
    }
  
    abstract code: string;
  
    toJSON(): SerializedException {
      return {
        message: this.message,
        code: this.code,
      };
    }
  }
  