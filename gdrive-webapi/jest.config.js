/*
 * For a detailed explanation regarding each configuration property, visit:
 */

module.exports = {
    clearMocks: true,
    restoreMocks: true,
    collectCoverage: true,
    preset: "ts-jest",
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: ["text", "lcov"],
    testEnvironment: "node",
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    watchPathIgnorePatterns: ["node_modules"],
    transformIgnorePatterns: ["node_modules"],
    collectCoverageFrom: ["src/**/*.js", "!src/**/index.js"],
};
