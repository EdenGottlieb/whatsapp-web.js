'use strict';

exports.LoadSafeRequire = () => {
    window.safeRequire = (moduleName) => {
            return window.require(moduleName) ?? {}
    }
}