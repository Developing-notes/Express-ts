import dotenv from "dotenv";

dotenv.config();

const MONGO_OPTIONS: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 4000;
const PROJECT_NAME = process.env.SERVER_PORT || "ecremmoce";

const MONGO = {
  options: MONGO_OPTIONS,
  url: `mongodb://${SERVER_HOSTNAME}/${PROJECT_NAME}`,
};

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
const CLOUDINARY = {
  CLOUD_NAME: "aravindbalaji",
  API_KEY: "854885969643915",
  API_SECRET:"MzOVn2q3JuY-5gZJrmgi_dC7y0I"
};


const config = {
  mongo: MONGO,
  server:SERVER,
  cloudinary :CLOUDINARY
};

export default config;
      