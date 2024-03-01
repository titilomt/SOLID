module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // Define onde o Jest deve buscar por arquivos de teste
  testMatch: [
    "__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  // Configurações para transformar arquivos TypeScript em JavaScript
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // Opções para o modo de observação
  watchPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  // Configurações adicionais para suporte a módulos ES6
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
