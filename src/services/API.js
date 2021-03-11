class API {

    constructor() {
        this.request = this.request.bind(this)
        this.getSinglePhoto = this.getSinglePhoto.bind(this)
        this.getPhotosByAlbum = this.getPhotosByAlbum.bind(this)
        this.getAlbum = this.getAlbum.bind(this)
    }

    location = 'https://jsonplaceholder.typicode.com'

    async request({uri, body, method = 'GET', params}) {
        const req = `${this.location}/${uri}?` + this.withParams(params)
        console.log({req})
        return await fetch(req, {
            method: method,
            body:  body && JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) return response.json()
            else throw new Error(response.statusText)
        })
    }

    withParams = (params) => {
        return Object.entries(params).length > 0 ? new URLSearchParams(params).toString() : ''
    }

    async getPhotos(offset, limit) {
        return await this.request({
            uri: 'photos',
            params: {
                _start: offset,
                _limit: limit
            }

        })
    }

    async getSinglePhoto({id}) {
        return await this.request({
            uri: `photos/${id}`,
            params: {
                _expand: 'album'
            }
        })
    }

    async getAlbum({id}) {
        return await this.request({
            uri: `albums/${id}`,
            params: {
                _expand: 'user'
            }
        })
    }

    async getPhotosByAlbum({id, offset, limit}) {
        return await this.request({
            uri: `photos`,
            params: {
                albumId: id,
                _start: offset,
                _limit: limit
            }
        })
            .then(rez => {
                console.log(JSON.stringify(rez))
                return rez
            })
    }
}

export default new API()
