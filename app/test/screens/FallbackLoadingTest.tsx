/* FallbackLoadingTest.tsx */
// loading screen test

// src imports
import { Fallback } from "@screens";

function FallbackLoadingTest() {
    return (
        <Fallback loading={true} message="I'm loading..." />
    );
}

export default FallbackLoadingTest;