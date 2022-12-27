import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const config = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy",
        ...pathsToModuleNameMapper(compilerOptions.paths, {
            prefix: "<rootDir>",
        }),
    },
};

export default config;
