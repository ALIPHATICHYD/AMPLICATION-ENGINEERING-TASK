import type { AmplicationPlugin, CreateAdminUIParams, CreateServerParams, DsgContext, Events, Module } from "@amplication/code-gen-types";
import { EventNames } from "@amplication/code-gen-types";
import { resolve } from "path";

class ExamplePlugin implements AmplicationPlugin {
  /**
   * This is mandatory function that returns an object with the event name. Each event can have before or/and after
   */
  register(): Events {
    return {
      [EventNames.CreateServer]: {
        before: this.beforeCreateServer,
        after: this.afterCreateServer,
      },
      [EventNames.CreateAdminUI]: {
        before: this.beforeCreateAdminUI,
      },
    };
  }

  /**
   * Method to be executed before creating the server
   * @param context - The DsgContext object
   * @param eventParams - The CreateServerParams object
   * @returns The CreateServerParams object
   */
  async beforeCreateServer(context: DsgContext, eventParams: CreateServerParams): Promise<CreateServerParams> {
    return eventParams;
  }

  /**
   * Method to be executed after creating the server
   * @param context - The DsgContext object
   * @param eventParams - The CreateServerParams object
   * @param modules - The array of Module objects
   * @returns An array of Module objects
   */
  async afterCreateServer(
    context: DsgContext,
    eventParams: CreateServerParams,
    modules: Module[]
  ): Promise<Module[]> {
    const staticPath = resolve(__dirname, "./static");
    const staticsFiles = await context.utils.importStaticModules(
      staticPath,
      context.serverDirectories.srcDirectory
    );

    return [...modules, ...staticsFiles];   
  }

  /**
   * Method to be executed before creating the admin UI
   * @param context - The DsgContext object
   * @param eventParams - The CreateAdminUIParams object
   * @returns The CreateAdminUIParams object
   */
  async beforeCreateAdminUI(context: DsgContext, eventParams: CreateAdminUIParams): Promise<CreateAdminUIParams> {
    return eventParams;
  }
}

export default ExamplePlugin; 