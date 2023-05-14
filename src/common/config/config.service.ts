import {ConfigInterface} from './config.interface.js';
import {config} from 'dotenv';
import {LoggerInterface} from '../logger/logger.interface.js';
import {configSchema, ConfigSchema} from './config.schema.js';

export default class ConfigService implements ConfigInterface {
  private config: ConfigSchema;
    private logger: LoggerInterface;

  constructor(logger: LoggerInterface) {
        this.logger = logger;
    
        const parsedOutput = config();
    
        if (parsedOutput.error) {
          throw new Error('Не могу прочитать .env файл. Возможно файл не существует.');
        }
    
        configSchema.load({});
        configSchema.validate({allowed: 'strict', output: this.logger.info});

        this.config = configSchema.getProperties();
        this.logger.info('.env файл успешно прочитан!');
    }

  public get<T extends keyof ConfigSchema>(key: T) {
    return this.config[key];
  }
}