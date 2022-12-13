const sinon = require('sinon')
const proxyquire = require('proxyquire')

describe('src/api.js', ()=>{
    
    let sandbox, api
    before(()=>{   
        sandbox = sinon.createSandbox();

        stubs = {
            uuid: {
                v4: sandbox.stub()
            },
            fetch: sandbox.stub()
        }

        api = proxyquire('../src/api', {
            "cross-fetch": stubs.fetch,
            "uuid": stubs.uuid
        })
    })

    describe('getId()', ()=>{
        it('Should call uuid() once', async ()=> {
            await api.getId()
            sinon.assert.calledOnce(stubs.uuid.v4)
        })
    })

    describe('getProfile()', ()=>{
        it('Should call fetch() once', async ()=> {
            await api.getProfile()
            sinon.assert.calledOnce(stubs.fetch)
        })
    })

})