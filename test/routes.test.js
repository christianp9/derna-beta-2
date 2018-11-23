const chai = require('chai')
const server = require('../index')
const chaiHttp = require('chai-http')

const should = chai.should()
const expect = chai.expect

chai.use(chaiHttp);

describe('User', () => {
    it('should list ALL  on / GET', (done) => {
        chai.request(server)
            .get('/students')
            .end((err, res) => {
                if (err) done(err)                
                res.should.be.json;                
                expect(res).to.have.status(200)                
                // expect(res.body).to.be.an('array')               
                // done();
            });
    });
    // it('should list SINGLE User on /api/user GET', function (done) {
    //     chai.request(server)
    //         .get('/api/user')
    //         .set('user_key', key)
    //         .end(function (err, res) {                
    //             res.should.have.status(200);
    //             res.should.be.json;              
    //             done();
    //         });
    // });
    it('should add a SINGLE User / POST', (done) => {
        chai.request(server)
            .post('/registro')
            .send({
                name: 'kassa',
                name_father: 'pato',
                name_mother:'lucas',
                guardian_name: 'carlos',
                age:12
            })
            // .end((err, res) => {
            //     res.should.have.status(200);
            //     res.should.be.json;
            //     //expect(res.body).to.property('user')
            //     //done();
            // });
    });




});