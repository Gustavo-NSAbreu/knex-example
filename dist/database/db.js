"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const knex_1 = __importDefault(require("knex"));
const databaseOptions = {
    client: 'postgresql',
    connection: {
        host: 'localhost',
        port: 5432,
        database: 'knex_example',
        user: 'postgres',
        password: 'postgres'
    },
    pool: {
        min: 2,
        max: 10
    },
};
exports.database = (0, knex_1.default)(databaseOptions);
