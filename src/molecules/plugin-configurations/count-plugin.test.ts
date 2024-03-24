import { EntityController } from 'amplication-server';
import countPlugin from './count-plugin';
import { Entity, FindConditions } from 'typeorm';

class User implements Entity {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

describe('Count Plugin', () => {
  it('should expose the count method in the REST API Controller', () => {
    const userController: EntityController<User> = {
      entityName: 'User',
      service: {
        addMethod: jest.fn(),
        count: jest.fn(),
      },
    };

    userController.service.count = jest.fn().mockResolvedValue(10);

    if (countPlugin.entitiesMetadataHooks?.beforeApplyMetadata) {
      countPlugin.entitiesMetadataHooks.beforeApplyMetadata([], [userController]);
    } else {
      throw new Error('countPlugin.entitiesMetadataHooks.beforeApplyMetadata is not defined.');
    }

    expect(userController.service.addMethod).toHaveBeenCalledWith(
      'count',
      {
        where: {} as FindConditions<User>, 
      },
      expect.any(Function)
    );
  });

});
