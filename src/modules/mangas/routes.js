const http = require('../../constants/http');

module.exports = [{
    method: http.verbs.GET,
    path: '/mangas/:manga_id',
    handler: 'getById'
}]