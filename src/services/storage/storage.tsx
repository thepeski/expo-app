/* @services/storage/storage.tsx */
// device storage manager

// local
import { get, set, del, delIfExists } from "./logic";

const storage = { get, set, del, delIfExists } as const;

export { storage };