module.exports = {
    root: process.cwd(),
    host: '127.0.0.1',
    port: 3000,
    compress: /\.(html|js|css|md)/,
    cache: {
        maxAge: true,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
};