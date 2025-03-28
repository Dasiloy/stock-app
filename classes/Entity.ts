import { instanceToPlain } from "class-transformer";

export abstract class Entity {
  constructor(public readonly id: string) {}

  /**
   * Creates an instance of the subclass dynamically.
   */
  static createInstance<T extends Entity>(
    this: new (...args: any[]) => T,
    data: Omit<T, "getPlain">
  ): T {
    return new this(...(data as any));
  }

  /**
   * Returns a plain object version of the instance.
   */
  getPlain<T extends this>(): T {
    return instanceToPlain(this) as T;
  }
}
