import { nanoid } from "nanoid";
import { v4 as uuidv4 } from "uuid";
export class Id {
    static uuid() {
        return uuidv4();
    }
    static nanoId(size = 12) {
        return nanoid(size);
    }
}
