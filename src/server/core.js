import express from 'express';

export function startServer(port, staticPath) {
  let app = express();

  // use 'dist' as static path
  app.use(express.static(staticPath));

  // listen on given or default port
  app.listen(port, () => {
    console.log("Server listening at http://localhost:%s", port);
  });

}
