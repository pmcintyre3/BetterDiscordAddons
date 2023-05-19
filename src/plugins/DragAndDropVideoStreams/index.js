/**
 * 
 * @param {import("zerespluginlibrary").Plugin} Plugin 
 * @param {import("zerespluginlibrary").BoundAPI} Library 
 * @returns 
 */
module.exports = (Plugin, Library) => {

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
                if(e.removedNodes[0].querySelector(`.${callTileClass}`)) {
                    Logger.info("Participant(s) removed!");
                    console.log(e);
                }
                    
                if(e.removedNodes[0].querySelector(`.${callTileRowClass}`)) {
                    Logger.info("Row(s) removed!");
                    console.log(e);
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