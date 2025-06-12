/* @constants/app.ts */
// app menu list

const app = [
    {
        category: "Screens",
        groups: [
            {
                group: "Fallback",
                routes: [
                    { label: "Loading", path: "test/screens/Fallback/FallbackLoadingTest" },
                    { label: "Error", path: "test/screens/Fallback/FallbackErrorTest" },
                    { label: "Null", path: "test/screens/Fallback/FallbackNullTest" }
                ]
            },
            
        ]
    }
]

export default app;