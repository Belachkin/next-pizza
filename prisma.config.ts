import { defineConfig } from "@prisma/config";
import * as dotenv from "dotenv";

// Явно загружаем переменные из .env файла
dotenv.config();

export default defineConfig({
  migrations: {
    seed: 'ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts',
  },
  datasource: {
    // Теперь process.env.DATABASE_URL точно не будет undefined
    url: process.env.DATABASE_URL,
  },
});
