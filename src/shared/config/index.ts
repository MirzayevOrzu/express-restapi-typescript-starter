import dotenv from "dotenv";

dotenv.config();

interface IConfig {
  port: number;
  db: {
    host: string;
    port: number;
    name: string;
  };
  jwt: {
    secret: string;
  };
}

const config: IConfig = {
  port: +process.env.PORT! || 3000,
  db: {
    host: process.env.DB_HOST || "localhost",
    port: +process.env.DB_PORT! || 27017,
    name: process.env.DB_NAME || "ts-mongo",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "hey",
  },
};

export default config;
