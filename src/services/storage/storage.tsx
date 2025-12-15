/* @services/storage/storage.tsx */
// manage device storage

// local
import { get, set, del, delIfExists } from "./logic";
import { Props } from "./types";

const storage: Props = { get: get, set: set, del: del, delIfExists: delIfExists };

export { storage };