import { PluginInstallation } from "@amplication/code-gen-types";
import { name as PackageName } from "../../../package.json";
import { Settings } from '../../types';
import defaultSettings from "../../../.amplicationrc.json";

/**
 * Retrieving and merging plugin settings from default settings and user-defined settings.
 *
 * @param {PluginInstallation[]} pluginInstallations - An array of plugin installations.
 *
 * @returns {Settings} The merged plugin settings.
 * @throws {Error} If the plugin installation is not found.
 */
export const getPluginSettings = (
  pluginInstallations: PluginInstallation[]
): Settings => {
  // Finding the plugin installation by package name
  const plugin = pluginInstallations.find(
    (installation) => installation.npm === PackageName
  );

  // If the plugin installation is not found, throw an error
  if (!plugin) {
    throw new Error(`Plugin '${PackageName}' is not installed.`);
  }

  // Extract user-defined settings or use an empty object if not defined
  const userSettings = plugin.settings || {};

  // Merge default settings with user-defined settings
  const settings: Settings = {
    ...defaultSettings,
    ...userSettings,
  };

  return settings;
};