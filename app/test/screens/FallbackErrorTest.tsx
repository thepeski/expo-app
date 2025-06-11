/* FallbackErrorTest.tsx */
// error screen test

// src imports
import { Fallback } from "@screens";

function FallbackErrorTest() {
    return (
        <Fallback
            error={true}
            message="Oops, there's an error!"
            action="Reload"
        />
    );
}

export default FallbackErrorTest;