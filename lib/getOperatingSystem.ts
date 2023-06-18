export default function getOperatingSystem(window: Window) {
    let operatingSystem = null;
    if (window.navigator.appVersion.indexOf('Win') !== -1) {
        operatingSystem = 'Windows';
    }
    if (window.navigator.appVersion.indexOf('Mac') !== -1) {
        operatingSystem = 'macOS';
    }
    if (window.navigator.appVersion.indexOf('Linux') !== -1) {
        operatingSystem = 'Linux';
    }

    return operatingSystem;
}