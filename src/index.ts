import { createServer } from 'http';
import 'dotenv/config';
import consts from './assets/consts.ts';
import { router } from './router/router.ts';

const PORT = Number(process.env.PORT) || consts.DEFAULT_API_PORT;

// Renamed for a possible future balancer
const processPort = PORT;

export const server = createServer(router(processPort));

server.listen(processPort, () => {
  console.log(`Server #${process.pid} is running on port ${processPort}`);
});
