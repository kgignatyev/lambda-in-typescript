import {APIGatewayProxyEvent} from "aws-lambda";

const app = require('../src/app');
const chai = require('chai');
const expect = chai.expect;

describe('Tests index', function () {
    it('verifies successful response', async () => {

       let  event:APIGatewayProxyEvent =
        {
            isBase64Encoded: false,
            multiValueHeaders: {},
            multiValueQueryStringParameters: undefined,
            pathParameters: undefined,
            requestContext: undefined,
            resource: "",
            stageVariables: undefined,
            queryStringParameters: {aa:'bb'}, path: '/some-path/', body: "",headers:{},httpMethod: "get"}

        const result = await app.lambdaHandler(event)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.path).to.be.equal("/some-path/");
        // expect(response.location).to.be.an("string");
    });
});
