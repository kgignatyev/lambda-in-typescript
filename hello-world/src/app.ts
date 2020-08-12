import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";


export const lambdaHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

    const queries = JSON.stringify(event.queryStringParameters);
    const path = JSON.stringify( event.path)
    return {
        statusCode: 200,
        headers: {"content-type": "application/json"},
        body: `{"Queries": ${queries} , "path": ${path} }`

    }
}
