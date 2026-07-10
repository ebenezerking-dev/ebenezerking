// src/data/careers/index.ts
// this index file imports and exports the developer career data

// ================== IMPORTS
import type { CareerData } from "../../types/career";
import { developerData } from "./developer";
// import { fitnessData } from "./fitness";
// import { customerServiceData } from "./customerService";
// ================== CAREER EXPORTS
export const careers: CareerData[] = [developerData];

export { developerData };
