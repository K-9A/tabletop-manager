// import socket from "../../utils/socket-client";
// import store from "@/store";


// let isListenerAttached = false;

// export const socketMiddleware = (api: any) => (next: any) => (action: any) => {

//     if (!isListenerAttached) {
//       socket.on('server:name-update', (updatedProfileData) => {
//             store.dispatch({
//                 type: "SERVER_NAME_UPDATE_RECEIVED",
//                 payload: updatedProfileData,
//             });
//         });
//         isListenerAttached = true;
//     }

//     return next(action);
// };
