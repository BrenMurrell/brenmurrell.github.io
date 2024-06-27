export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "/src/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/coverage/**',
    '!**/*.d.ts',
    '!**/*.config.*',
    '!**/*.test.*',
  ],

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};