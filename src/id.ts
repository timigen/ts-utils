import { nanoid } from "nanoid";
import { v4 as uuidv4 } from "uuid";

export class Id {
  public static uuid(): string {
    return uuidv4();
  }

  public static nanoId(size: number = 12): string {
    return nanoid(size);
  }
}
