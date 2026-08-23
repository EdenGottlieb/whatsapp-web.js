'use strict';

exports.LoadSafeRequire = () => {
    window.safeRequire = (moduleName) => {
        try {
            return window.require(moduleName)
        } catch (e) {
            console.log('Error while requiring module, resuming safely. Error: ', e)
            return {}
        }
    }
}