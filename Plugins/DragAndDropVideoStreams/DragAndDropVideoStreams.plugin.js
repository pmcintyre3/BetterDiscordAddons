/**
 * @name DragAndDropVideoStreams
 * @description A module to allow users arrange their Discord call screen in any way they want.
 * @version 0.0.1
 * @author Raiden11X
 * @authorId 231504668834922496
 * @website https://github.com/pmcintyre3/BetterDiscordAddons/tree/main/Plugins/DragAndDropVideoStreams
 * @source https://raw.githubusercontent.com/pmcintyre3/BetterDiscordAddons/main/Plugins/DragAndDropVideoStreams/DragAndDropVideoStreams.plugin.js
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();

@else@*/
const config = {
    id: "",
    info: {
        name: "DragAndDropVideoStreams",
        authors: [
            {
                name: "Raiden11X",
                discord_id: "231504668834922496",
                github_username: "Raiden11X",
                twitter_username: "pmcintyre3"
            }
        ],
        version: "0.0.1",
        description: "A module to allow users arrange their Discord call screen in any way they want.",
        github: "https://github.com/pmcintyre3/BetterDiscordAddons/tree/main/Plugins/DragAndDropVideoStreams",
        github_raw: "https://raw.githubusercontent.com/pmcintyre3/BetterDiscordAddons/main/Plugins/DragAndDropVideoStreams/DragAndDropVideoStreams.plugin.js"
    },
    name: "DragAndDropVideoStreams",
    author: "Raiden11X",
    authorId: "231504668834922496",
    authorLink: "",
    version: "0.0.1",
    description: "A module to allow users arrange their Discord call screen in any way they want",
    website: "",
    source: "https://github.com/pmcintyre3/BetterDiscordAddons/tree/main/Plugins/DragAndDropVideoStreams",
    patreon: "",
    donate: "",
    invite: "",
    changelog: [],
    main: "index.js",
    defaultConfig: []
};
class Dummy {
    constructor() {this._config = config;}
    start() {}
    stop() {}
}
 
if (!global.ZeresPluginLibrary) {
    BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.name ?? config.info.name} is missing. Please click Download Now to install it.`, {
        confirmText: "Download Now",
        cancelText: "Cancel",
        onConfirm: () => {
            require("request").get("https://betterdiscord.app/gh-redirect?id=9", async (err, resp, body) => {
                if (err) return require("electron").shell.openExternal("https://betterdiscord.app/Download?id=9");
                if (resp.statusCode === 302) {
                    require("request").get(resp.headers.location, async (error, response, content) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.app/Download?id=9");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), content, r));
                    });
                }
                else {
                    await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                }
            });
        }
    });
}
 
module.exports = !global.ZeresPluginLibrary ? Dummy : (([Plugin, Api]) => {
     const plugin = (Plugin, Library) => {

    const {DOM, UI} = window.BdApi;
    const {DiscordSelectors, Logger} = Library;

    const videoTopToolbarClass = "container-ZMc96U";
    const moreButton = {
        ariaLabel: "More",
        class: "lastButton-3QdII0 button-ejjZWC"
    };

    const callAreaRootClass = "root-22AK9z";
    const callAreaClass = "callContainer-HtHELf";
    const callTileRowClass = "row-jreWvj";
    const callTileClass = "tile-3GyaDQ";
    const callTileRowListClass = "listItems-6eZzQ1";

    const draggableRowContainerClass = "draggable";
    const draggableTileContainerClass = "draggable";

    return class DragAndDropVideoStreams extends Plugin {

        constructor() {
            super();
        }

        onStart() {
            Logger.info("Plugin enabled!");

            // const observer = new 
        }

        observer(e) {
            // if (!e.addedNodes.length || !(e.addedNodes[0] instanceof Element)) return;

            // if ((!e.addedNodes.length || !(e.addedNodes[0] instanceof Element)) && (!e.removedNodes.length || !(e.removedNodes[0] instanceof Element))) return;
            
            // if(e.addedNodes[0].querySelector(`.${callTileClass}`)) {
            //     Logger.info("Participant added!");
            //     console.log(e);
            // }
            // if (e.removedNodes.length > 0 && e.removedNodes[0].querySelector(`.${callTileClass}`)) {
            //     Logger.info("Participant removed!");
            //     console.log(e);
            // }
            
            // if(e.addedNodes[0].querySelector(`.${callTileRowClass}`)) {
            //     Logger.info("Row added!");
            //     console.log(e);
            // }
            // if (e.removedNodes.length > 0 && e.removedNodes[0].querySelector(`.${callTileRowClass}`)) {
            //     Logger.info("Row removed!");
            //     console.log(e);
            // }
            
            // if(e.addedNodes.length && e.addedNodes[0] instanceof Element) {
            //     if(e.target.classList.contains(callTileRowListClass)) {
            //         Logger.info("Added Row!");
            //         console.log(e);
            //         this.addRow(e.target);
            //     }
                
            //     if(e.target.classList.contains(callAreaRootClass)) {
            //         Logger.info("Added tile!");
            //         console.log(e);
            //         this.addTile(e.target);
            //     }
            // }

            if(e.addedNodes.length && e.addedNodes[0] instanceof Element) {
                if(e.addedNodes[0].querySelector(`.${callTileClass}`)) {
                    Logger.info("Participant added!");
                    console.log(e);
                    this.addTile(e.target);
                }
                    
                if(e.addedNodes[0].querySelector(`.${callTileRowClass}`)) {
                    Logger.info("Row added!");
                    console.log(e);
                    this.addRow(e.target);
                }
            }
            
            if(e.removedNodes.length && e.removedNodes[0] instanceof Element) {
                // Logger.info("Removed something!")
                // console.log(e);

                if(e.removedNodes[0].querySelector(`.${callTileClass}`)) {
                    Logger.info("Participant(s) removed!");
                    console.log(e);
                    // this.addTile(e.target);
                }
                    
                if(e.removedNodes[0].querySelector(`.${callTileRowClass}`)) {
                    Logger.info("Row(s) removed!");
                    console.log(e);
                    // this.addTile(e.target);
                }
            }
        }

        onStop() {
            Logger.info("Plugin disabled!");
        }

        addRow(rootElement) {
            const rows = rootElement.querySelectorAll(`.${callTileRowClass}:not(.${draggableRowContainerClass})`);
            Logger.info(`Adding ${(rows.length)} rows!`);

            if(rows.length <= 0) return;

            for(let row of rows) {
                console.log(row);
                if(!row.classList.contains(draggableRowContainerClass)) {
                    row.classList.add(draggableRowContainerClass);
                }
            }
        }

        addTile(rootElement) {
            const tiles = rootElement.querySelectorAll(`.${callTileClass}:not(.${draggableTileContainerClass})`);
            Logger.info(`Adding ${(tiles.length)} tiles!`);

            if(tiles.length <= 0) return;

            for(let tile of tiles) {
                console.log(tile);
                if(!tile.classList.contains(draggableTileContainerClass)) {
                    tile.classList.add(draggableTileContainerClass);
                }
            }
        }
    };

};
     return plugin(Plugin, Api);
})(global.ZeresPluginLibrary.buildPlugin(config));
/*@end@*/