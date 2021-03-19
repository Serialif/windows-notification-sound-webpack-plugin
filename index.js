const webpack = require('webpack')
const {exec} = require('child_process')

class WindowsNotificationSound {
    constructor(options) {
        return new webpack.ProgressPlugin(function (percent, message, ...args) {
            if (message === 'done') {
                exec(`rundll32 user32.dll,MessageBeep`)
            }
        })
    }
}

module.exports = WindowsNotificationSound
