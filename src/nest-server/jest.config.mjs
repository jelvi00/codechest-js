
const config = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
    moduleFileExtensions: ['js', 'ts'],
    testRegex: '(/test/.*|(\\.|/)(test|spec|e2e-spec))\\.(js|ts)$',
    testPathIgnorePatterns: [ '<rootDir>/test/jest.setup.js' ],
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },
};

export default config
