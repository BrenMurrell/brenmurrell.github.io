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
    'src/**/*.{js,jsx}',
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/coverage/**',
    '!**/*.d.ts',
    '!**/*.config.*',
    '!**/*.test.*',
    '!public',
    '!src/mocks/**'
  ],

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};