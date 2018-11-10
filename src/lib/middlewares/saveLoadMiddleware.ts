import { FileSystemObject } from "fso";
import * as shiorack from "shiorack";

// tslint:disable-next-line completed-docs
function saveLoadMiddleware<SaveData>(filePath: string):
    shiorack.ShioriMiddlewareWithState<{}, saveLoadMiddleware.SaveDataState<SaveData>> {
    const file = new FileSystemObject(filePath);

    return {
        load: async function loadMiddleware(ctx, next) {
            if (file.existsSync()) {
                ctx.state.saveData = JSON.parse(await file.readFile("utf8"));
            }

            return next();
        },
        unload: async function saveMiddleware(ctx, next) {
            await next();
            if (typeof ctx.state.saveData === "undefined") {
                if (file.existsSync()) await file.unlink();
            } else {
                await file.writeFile(JSON.stringify(ctx.state.saveData));
            }
        },
        state: {
            saveData: undefined,
        },
    };
}

// tslint:disable-next-line no-namespace
namespace saveLoadMiddleware {
    export interface SaveDataState<SaveData> {
        saveData?: SaveData;
    }
}

export = saveLoadMiddleware;
