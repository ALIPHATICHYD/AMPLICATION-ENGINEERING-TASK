import { EntityController } from 'amplication-server';
import countPlugin from '..src/count-plugin';

describe('Count Plugin', () => {
  it('should expose the count method in the REST API Controller', () => {
    // Mock entity controller
    const userController: EntityController<'User'> = {
      entityName: 'User',
      service: {
        addMethod: jest.fn(),
        count: jest.fn(),
      },
    };

    // Apply the count plugin
    if (countPlugin.entitiesMetadataHooks?.beforeApplyMetadata) {
      countPlugin.entitiesMetadataHooks.beforeApplyMetadata([], [userController]);
    } else {
      throw new Error('countPlugin.entitiesMetadataHooks.beforeApplyMetadata is not defined.');
    }

    // Assert that the count method is added to the REST API Controller
    expect(userController.service.addMethod).toHaveBeenCalledWith(
      'count',
      expect.any(Object),
      expect.any(Function)
    );
  });
});
