import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
   dir: './',
});

const config = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx'],
    testRegex: '(/test/.*|(\\.|/)(test|spec|e2e-spec))\\.(js|ts|tsx|jsx)$',
    testPathIgnorePatterns: [ '<rootDir>/test/jest.setup.js' ],
};

export default createJestConfig(config)
