import { getHelloWorld } from '.';

describe('PostHelloWorld', () => {
    it('should greet a named user', () => {
        // Make request
        const context: any = { res: { status: 500, body: {} }, done: () => {} };
        const req: any = { params: { name: 'foo' } };
        getHelloWorld(context, req);
        // Test expected results
        expect(context.res.body['message']).toEqual('Hello there, foo');
        expect(context.res.status).toEqual(200);
    });
});
