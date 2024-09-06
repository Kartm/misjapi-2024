// exports.onPreInit = ({ store }) => {
//     const plugins = store.getState().flattenedPlugins;
//
//     const catchLinksPluginIndex = plugins.findIndex(
//         (plugin) => plugin.name === 'gatsby-plugin-catch-links'
//     );
//
//     if (catchLinksPluginIndex !== -1) {
//         console.log("Removing gatsby-plugin-catch-links...");
//         plugins.splice(catchLinksPluginIndex, 1);  // Remove the plugin
//     }
// };