// Defining a custom interface for settings
export interface Settings {
  [key: string]: any;
}

// Defining a custom interface for an example object
export interface ExampleInterface {
  id: string;
  name: string;
  description?: string;
}

// Defining a custom enum for an example status
export enum ExampleStatusEnum {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
}

// Defining a custom enum for an example role
export enum ExampleRoleEnum {
  USER = "user",
  ADMIN = "admin",
}

export type ExampleResponse = ExampleInterface | null;

export type ExampleArray = ExampleInterface[];

export type ExampleCallback = (example: ExampleInterface) => void;

export type OptionalCallback = ((data: any) => void) | null;

export type ExampleDictionary = Record<string, ExampleInterface>;

export type ExampleStatusArray = ExampleStatusEnum[];

export type ExampleRoleDictionary = Record<string, ExampleRoleEnum>;
