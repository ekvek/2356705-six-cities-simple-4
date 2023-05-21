export const Component = {
  Application: Symbol.for('Application'),
  LoggerInterface: Symbol.for('LoggerInterface'),
  ConfigInterface: Symbol.for('ConfigInterface'),
  DatabaseClientInterface: Symbol.for('DatabaseClientInterface'),
  DatabaseInterface: Symbol.for('DatabaseInterface'),
  UserServiceInterface: Symbol.for('UserServiceInterface'),
  UserModel: Symbol.for('UserModel')
} as const;
