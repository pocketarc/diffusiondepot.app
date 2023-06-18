/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    deviceSizes: [640, 960, 1280, 1600, 1920, 2560],
    convertFormat: [
        ['png', 'webp'],
        ['jpg', 'webp'],
    ],
    sharpOptions: {
        png: {
            compressionLevel: 9,
            effort: 10,
            adaptiveFiltering: true,
        },
        webp: {
            nearLossless: true,
            smartSubsample: true,
            effort: 6
        }
    }
};

module.exports = config;
