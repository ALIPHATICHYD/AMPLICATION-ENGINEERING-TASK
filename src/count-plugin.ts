import { PluginConfig, PluginInfo } from '@paljs/types';
import { gql } from 'graphql-tag';
import { IEntityController, EntityController } from '@paljs/types';
import { createPlugin } from '@paljs/editor';

// Defining a function to create the count method for an entity controller
function createCountMethod(controller: EntityController<any>) {
  controller.service.addMethod(
    'count',
    gql`
      type CountResult {
        count: Int!
      }

      extend type Query {
        count${controller.entityName}s: CountResult!
      }
    `,
    async () => {
      const count = await controller.service.count();
      return { count };
    }
  );
}

// Defining the countPlugin configuration
const countPlugin: PluginConfig = {
  entitiesMetadataHooks: {
    async beforeApplyMetadata(
      _,
      entityControllers: IEntityController[]
    ) {
      // Find the entity controller for 'User'
      const userController = entityControllers.find(
        (controller) => controller.entityName === 'User'
      );

      // Add count functionality if the controller is found
      if (userController) {
        createCountMethod(userController);
      }
    },
  },
};

// Exporting the plugin information and configuration
export default createPlugin(
  (): PluginInfo => ({
    name: 'count-plugin',
    displayName: 'Count Plugin',
    description: 'A plugin to add count functionality to the REST controllers.',
    version: '1.0.0',
  }),
  countPlugin
);
