import type {
  AmplicationPlugin,
  CreateAdminUIParams,
  CreateServerParams,
  DsgContext,
  Events,
  Module,
} from "@amplication/code-gen-types";
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

  async

  beforeCreateServer(context: DsgContext, eventParams: CreateServerParams) {
    return eventParams; // eventParams must return from before function. It will be used for the builder function.
  }

  async afterCreateServer(
    context: DsgContext,
    eventParams: CreateServerParams,
    modules: Module[]
  ) {
    const staticPath = resolve(__dirname, "./static");
    const staticsFiles = await context.utils.importStaticModules(
      staticPath,
      context.serverDirectories.srcDirectory
    );

    return [...modules, ...staticsFiles]; 
  }

  beforeCreateAdminUI(context: DsgContext, eventParams: CreateAdminUIParams) {
    // Same as beforeCreateServer but for a different event.

    return eventParams;
  }
}

export default ExamplePlugin;
