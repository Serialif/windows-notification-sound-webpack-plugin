<div align="center">
    <p align="center"><a href="https://serialif.com"><img width="80" height="80" src="https://serialif.com/images/serialif-white.png" alt="Serialif"></a>
<hr>
    <p align="center"><img src="https://serialif.com/images/windows-notification-sound-webpack-plugin-logo.png"
             alt="Windows Notification Sound Webpack Plugin"></p>

<h3 align="center">Simple Webpack plugin to play the Windows notification sound at the end of the compilation</h3>
<p align="center"><a href="https://github.com/webpack/webpack"><img width="60" height="60" src="https://webpack.js.org/assets/icon-square-big.svg" alt="Webpack"></a></p>
<hr>
</div>

# Windows Notification Sound Webpack Plugin

## Features
- No dependencies
- Only for Windows 10 users
- Play the default notification sound when compilation is complete. **Very useful in watch mode**.

## Installation

```
npm install -D windows-notification-sound-webpack-plugin

```
```
yarn add -D windows-notification-sound-webpack-plugin
```

## Usage

Include the following in your Webpack config.

```javascript
  const WindowsNotificationSound = require('windows-notification-sound-webpack-plugin');
  
  plugins: [
      new WindowsNotificationSound()
  ]
```

## License

MIT