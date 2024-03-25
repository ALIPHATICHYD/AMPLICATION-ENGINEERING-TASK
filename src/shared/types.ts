export interface Settings {
  [key: string]: string | number | boolean;
}

export interface ExampleEntity {
  id: string;
  name: string;
  description?: string;

  validate(): boolean;
}

export interface ExampleEntityDetails extends ExampleEntity {
  additionalProperty1: string;
  additionalProperty2: number;
}

export enum ExampleStatusEnum {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  ARCHIVED = "archived",
}

export interface ExampleStatusDetails {
  status: ExampleStatusEnum;
  archivedDate?: Date;
}

export type ExampleStatus = ExampleStatusEnum | ExampleStatusDetails;

export enum ExampleRoleEnum {
  USER = "user",
  ADMIN = "admin",
  EDITOR = "editor",
}

export interface User {
  id: string;
  username: string;
  role: ExampleRoleEnum;
  permissions: string[];
}

export type ExampleResponse = ExampleEntity | null;
export type ExampleArray = ExampleEntity[];
export type ExampleCallback = (example: ExampleEntity) => void;
export type OptionalCallback = ((data: unknown) => void) | null;
export type ExampleDictionary = Record<string, ExampleEntity>;
export type ExampleStatusArray = ExampleStatusEnum[];
export type ExampleRoleDictionary = Record<string, ExampleRoleEnum>;