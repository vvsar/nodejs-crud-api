import { IncomingMessage, ServerResponse } from 'http';

export const router = (processPort: number) => {
  return async (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader('Content-Type', 'application/json');
    try {
      const { method, url } = req;
      console.log(
        `Executing ${method} ${url} request - server #${process.pid} on port ${processPort}`,
      );
    } catch (error) {
      throw error;
    }
  };
};
