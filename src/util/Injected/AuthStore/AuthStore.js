'use strict';

exports.ExposeAuthStore = () => {
    window.AuthStore = {};
    // Logged-out browsers may be served the slim /login/ app, which doesn't ship WAWebSocketModel.
    // Requiring it there is reported by WA's ErrorUtils, so don't even try.
    window.AuthStore.isLoginPage = window.location.pathname.startsWith('/login');
    window.AuthStore.AppState = window.AuthStore.isLoginPage ? undefined : window.safeRequire('WAWebSocketModel').Socket;
    window.AuthStore.BackendEventBus = window.safeRequire('WAWebBackendEventBus').BackendEventBus;
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
