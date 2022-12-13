exports.default = class ConnectionClient {
    constructor(auth, brokerClient) {
        this.auth = auth
        this.brokerClient = brokerClient
    }

    connect() {
        this.brokerClient.connect(this.auth)
    }

    close() {
        this.brokerClient.close()
    }
}