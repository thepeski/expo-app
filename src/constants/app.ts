/* @constants/app.ts */
// app menu list

const app = [
    {
        category: "Screens",
        groups: [
            {
                group: "Fallback",
                routes: [
                    { label: "Loading", path: "test/screens/FallbackLoadingTest" },
                    { label: "Error", path: "test/screens/FallbackErrorTest" },
                    { label: "Null", path: "test/screens/FallbackNullTest" }
                ]
            },
            
        ]
    }
]

export default app;