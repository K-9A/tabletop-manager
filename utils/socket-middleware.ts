import socket from "./socket-client";
import store from "@/store";



let isListenerAttached = false;


export const socketMiddleware = (api: any) => (next: any) => (action: any) => {

    if (!isListenerAttached) {
      socket.on('server:name-update-confirmed', (updatedProfileData) => {
            console.log("Test Message received in middleware");
            store.dispatch({
                type: "SERVER_NAME_UPDATE_RECEIVED",
                payload: updatedProfileData,
            });
        });
        isListenerAttached = true;
    }

    return next(action);
};
