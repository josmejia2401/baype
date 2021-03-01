export function isImage(uri) {
    return (uri.match(/\.(jpeg|jpg|gif|png)$/) != null);
}