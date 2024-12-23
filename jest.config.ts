import type { Config } from 'jest';

const config: Config = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testRegex: '.*\\.test\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest'
    },
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*.module.ts',
        '!src/**/*.entity.ts',
        '!src/main.ts',
        '!src/**/*.response.ts',
        '!src/**/*.request.ts',
        '!src/**/*.repository.ts',
        '!src/**/*.config.ts',
        '!src/**/*.api-docs.ts',
        '!src/domain/**/*.ts',
        '!src/**/*seed*.ts',
        '!src/**/*.seed.ts'
    ],
    coverageDirectory: './coverage',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
        '/coverage/',
        'seed'
    ]
};

export default config; 