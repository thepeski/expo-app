/* @screens/App/types.ts */

type CategoryType = { type: "category"; label: string; };
type GroupType = { type: "group"; label: string; };
type RouteType = { type: "route"; label: string; path: string; };
type ItemType = CategoryType | GroupType | RouteType;

export { CategoryType, GroupType, RouteType, ItemType };