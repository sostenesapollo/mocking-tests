const sinon = require('sinon')
const { default: ConnectionClient } = require('../src/connection-client')

describe('src/connection-client.jssrc/connection-client.js', ()=>{

    let connectionClient, testData
    before(()=>{

        fakeComponents = {
            BrokerClient: {
                connect: ()=> {}
            }
        }

        spy = {
            connectionSpy: sinon.spy(fakeComponents.BrokerClient, 'connect')
        }

        testData = {
            auth: 'test-auth'
        }

        connectionClient = new ConnectionClient(testData.auth, fakeComponents.BrokerClient)
    })
    
    describe('connect()', ()=>{
        it('Should call brokerClient.connect()', ()=> {
            connectionClient.connect()
            sinon.assert.calledOnce(spy.connectionSpy)
        })
    })

})