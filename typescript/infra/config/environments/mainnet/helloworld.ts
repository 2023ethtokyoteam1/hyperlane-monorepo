import { HelloWorldConfig } from '../../../src/config';

import { MainnetChains, environment } from './chains';
import helloWorldAddresses from './helloworld/addresses.json';

export const helloWorld: HelloWorldConfig<MainnetChains> = {
  addresses: helloWorldAddresses,
  kathy: {
    docker: {
      repo: 'gcr.io/abacus-labs-dev/abacus-monorepo',
      tag: 'sha-0f9c0f9',
    },
    cronSchedule: '0 15 * * *', // Every day at 3:00 PM UTC
    chainsToSkip: [],
    runEnv: environment,
    namespace: environment,
    prometheusPushGateway:
      'http://prometheus-pushgateway.monitoring.svc.cluster.local:9091',
  },
};