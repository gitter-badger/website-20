import {startServer} from './src/server/core';
import path from 'path';

const staticPath = path.resolve(__dirname, 'dist');

// parse command line arguments
let args = process.argv.slice(2),
    commands = [],
    port = 3000;

while(args.length > 0) {
  commands.push(args.splice(0, 2));
}

commands.map( entry => {
  const [cmd, value] = entry;
  switch(cmd) {
    case '--port':
    port = value;
    break;
  }
});

startServer(port, staticPath);
