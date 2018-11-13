import MongoMemoryServer from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();

const uri = await mongod.getConnectionString();
const port = await mongod.getPort();
const dbPath = await mongod.getDbPath();
const dbName = await mongod.getDbName();

// some code

// you may stop mongod manually
mongod.stop();
// or it will be stopped automatically when you exit from script
// const mongod = new MongoMemoryServer({
//     instance: {
//       port?: ?number, // by default choose any free port
//       ip?: string, // by default '127.0.0.1', for binding to all IP addresses set it to `::,0.0.0.0`,
//       dbName?: string, // by default generate random dbName
//       dbPath?: string, // by default create in temp directory
//       storageEngine?: string, // by default `ephemeralForTest`, available engines: [ 'devnull', 'ephemeralForTest', 'mmapv1', 'wiredTiger' ]
//       debug?: boolean, // by default false
//       replSet?: string, // by default no replica set, replica set name
//       auth?: boolean, // by default `mongod` is started with '--noauth', start `mongod` with '--auth'
//       args?: string[], // by default no additional arguments, any additional command line arguments for `mongod` `mongod` (ex. ['--notablescan'])
//     },
//     binary: {
//       version?: string, // by default 'latest'
//       downloadDir?: string, // by default node_modules/.cache/mongodb-memory-server/mongodb-binaries
//       platform?: string, // by default os.platform()
//       arch?: string, // by default os.arch()
//       debug?: boolean, // by default false
//     },
//     debug?: boolean, // by default false
//     autoStart?: boolean, // by default true
//   });