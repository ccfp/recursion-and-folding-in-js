// This is a pretty minimal and probably fragile browser-sniffing script
// Works on my machine ¯\_(ツ)_/¯

const isFirefox = typeof InstallTrigger !== "undefined"

const isChrome = !!window.chrome && !!window.chrome.webstore

const getDetectedBrowser = () =>
  isFirefox ? "Firefox" : isChrome ? "Chrome" : "Safari"
