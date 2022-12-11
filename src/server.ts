import { exam } from "./1_함수형_자바스크립트_소개/exam";

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: false });

// Declare a route
exam();

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
