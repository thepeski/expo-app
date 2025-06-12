/* @hooks/useImages.ts */
// preload images

// react imports
import { useEffect } from "react";

// expo imports
import { Asset } from "expo-asset";

// src imports
import { Logger } from "@dev";

function useImages(...images: number[]) {
    const logger = new Logger("useImages.ts");

    useEffect(() => {
        images.forEach(image => {
            if (typeof image === "number") {
                Asset.loadAsync(image);

                logger.info(`loaded image: ${image.toString()}`);
            }
        });
    }, []);
}

export default useImages;