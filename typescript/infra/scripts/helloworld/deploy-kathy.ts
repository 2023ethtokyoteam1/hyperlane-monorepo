import { runHelloworldKathyHelmCommand } from '../../src/helloworld/kathy';
import { HelmCommand } from '../../src/utils/helm';
import {
  assertCorrectKubeContext,
  getContext,
  getContextAgentConfig,
  getEnvironment,
  getEnvironmentConfig,
} from '../utils';

import { getHelloWorldConfig } from './utils';

async function main() {
  const environment = await getEnvironment();
  const coreConfig = getEnvironmentConfig(environment);
  const context = await getContext();

  await assertCorrectKubeContext(coreConfig);

  const agentConfig = await getContextAgentConfig(coreConfig);
  const kathyConfig = getHelloWorldConfig(coreConfig, context).kathy;

  await runHelloworldKathyHelmCommand(
    HelmCommand.InstallOrUpgrade,
    agentConfig,
    kathyConfig,
  );
}

main()
  .then(() => console.log('Deploy successful!'))
  .catch(console.error);
