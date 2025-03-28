import { Entity } from "./Entity";

export class User extends Entity {
  constructor(id: string, public readonly first_name: string) {
    super(id);
  }
}
