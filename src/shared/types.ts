// Interface for application settings
export interface Settings {
  [key: string]: string | number | boolean;
}

// Interface for an example entity
export interface ExampleEntity {
  id: string;
  name: string;
  description?: string;
}

// Enum for example status
export enum ExampleStatusEnum {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
}

// Enum for example roles
export enum ExampleRoleEnum {
  USER = "user",
  ADMIN = "admin",
}

export type ExampleResponse = ExampleEntity | null;

export type ExampleArray = ExampleEntity[];

export type ExampleCallback = (example: ExampleEntity) => void;

export type OptionalCallback = ((data: unknown) => void) | null;

export type ExampleDictionary = Record<string, ExampleEntity>;

export type ExampleStatusArray = ExampleStatusEnum[];

export type ExampleRoleDictionary = Record<string, ExampleRoleEnum>;