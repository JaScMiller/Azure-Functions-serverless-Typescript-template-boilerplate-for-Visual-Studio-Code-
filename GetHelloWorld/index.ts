export function getHelloWorld(context: any, req: any) {
    const name = req.params['name'];

    context.res.status = 200;
    context.res.body = { message: `Hello there, ${name}` };
    return context.done();
}
