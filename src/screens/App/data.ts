/* @screens/App/data.ts */

// src imports
import { app } from "@constants"

// local imports
import { ItemType } from "./types"

const data: ItemType[] = app.flatMap(({ category, groups }) => [

    // category
    { type: "category" as const, label: category },

    // groups
    ...groups.flatMap(({ group, routes }) => [

        // group
        { type: "group" as const, label: group },

        // routes
        ...routes.map(route => ({ type: "route" as const, label: route.label, path: route.path }))
    ])
]);

export default data;