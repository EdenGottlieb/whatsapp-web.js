'use strict';

exports.ExposeAuthStore = () => {
    window.AuthStore = {};
    window.AuthStore.AppState = window.safeRequire('WAWebSocketModel').Socket;
    window.AuthStore.Cmd = window.safeRequire('WAWebCmd').Cmd;
    window.AuthStore.Conn = window.safeRequire('WAWebConnModel').Conn;
    window.AuthStore.OfflineMessageHandler = window.safeRequire('WAWebOfflineHandler').OfflineMessageHandler;
    window.AuthStore.PairingCodeLinkUtils = window.safeRequire('WAWebAltDeviceLinkingApi');
    window.AuthStore.Base64Tools = window.safeRequire('WABase64');
    window.AuthStore.RegistrationUtils = {
        ...window.safeRequire('WAWebCompanionRegClientUtils'),
        ...window.safeRequire('WAWebAdvSignatureApi'),
        ...window.safeRequire('WAWebUserPrefsInfoStore'),
        ...window.safeRequire('WAWebSignalStoreApi'),
    };
};