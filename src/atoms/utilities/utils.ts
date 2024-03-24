import { PluginInstallation } from "@amplication/code-gen-types";
import { name as PackageName } from "../../../package.json";
import { Settings } from "../../shared/types"
import defaultSettings from "../../../.amplicationrc.json";

/**
 * Find a plugin installation by package name.
 *
 * @param {PluginInstallation[]} pluginInstallations - An array of plugin installations.
 *
 * @returns {PluginInstallation} The found plugin installation.
 * @throws {Error} If the plugin installation is not found.
 */
const findPluginInstallation = ( pluginInstallations: PluginInstallation[] ): PluginInstallation => {
  const plugin = pluginInstallations.find(
    (installation) => installation.npm === PackageName
  );

  if (!plugin) {
    throw new Error(`Plugin '${PackageName}' is not installed.`);
  }

  return plugin;
};

/**
 * Merge default settings with user-defined settings.
 *
 * @param {Settings | undefined} userSettings - User-defined settings.
 *
 * @returns {Settings} The merged settings.
 */
const mergeSettings = (userSettings: Settings | undefined): Settings => {
  return {
    ...defaultSettings,
    ...userSettings,
  };
};

/**
 * Retrieving and merging plugin settings from default settings and user-defined settings.
 *
 * @param {PluginInstallation[]} pluginInstallations - An array of plugin installations.
 *
 * @returns {Settings} The merged plugin settings.
 */
export const getPluginSettings = ( pluginInstallations: PluginInstallation[] ): Settings => {
  const plugin = findPluginInstallation(pluginInstallations);
  const userSettings = plugin.settings || {};
  const settings = mergeSettings(userSettings);

  return settings;
};