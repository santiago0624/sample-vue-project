function middleware({next, router}) {
    // Do the things
    console.log('Message from the hello world middleware');
    return next();
}

export default middleware;