/* @components/Crasher/Crasher.tsx */
// simulate component crash

// src imports
import { Logger } from "@dev";

function Crasher(): React.ReactNode {
    const logger = new Logger("Crasher.tsx");

    logger.error("intentional component crash");
    
    throw new Error("intentional component crash");
}

export default Crasher;