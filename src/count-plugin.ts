import { PluginConfig, PluginInfo } from '@paljs/types';
import { gql } from 'graphql-tag';
import { IEntityMetadata, IEntityController, EntityController } from '@paljs/types';
import { createPlugin } from '@paljs/editor';

const countPlugin: PluginConfig = {
  entitiesMetadataHooks: {
    async beforeApplyMetadata(
      entitiesMetadata: IEntityMetadata[],
      entityControllers: IEntityController[]
    ) {
      // Find the entity controller for which you want to add the count functionality
      const userController = entityControllers.find(
        (controller) => controller.entityName === 'User'
      ) as EntityController<'User'>;

      // Modify the REST API Controller to expose the count method
      userController.service.addMethod(
        'count',
        gql`
          type CountResult {
            count: Int!
          }

          extend type Query {
            countUsers: CountResult!
          }
        `,
        async () => {
          const count = await userController.service.count();
          return { count };
        }
      );
    },
  },
};

export default createPlugin(
  (): PluginInfo => ({
    name: 'count-plugin',
    displayName: 'Count Plugin',
    description: 'A plugin to add count functionality to the REST controllers.',
    version: '1.0.0',
  }),
  countPlugin
);

function createPlugin(arg0: () => PluginInfo, countPlugin: PluginConfig) {
  // The implementation of createPlugin is missing, it should be provided elsewhere.
  // This function should return the plugin information and configuration.
  // For this example, we can simply return the provided countPlugin.
  return countPlugin;
}
