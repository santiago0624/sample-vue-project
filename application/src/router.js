import Vue from 'vue'
import Router from 'vue-router'

// Middleware

// Layouts
import OrdersLayout from '@/layouts/orders'

// Views
import DriversIndex from '@/views/drivers'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    },
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: OrdersLayout,
            meta: {
                middleware: [
                ]
            },
            children: [
                {
                    path: '/',
                    name: 'drivers-index',
                    component: DriversIndex
                }
            ]
        }
    ]
});


// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    // If no subsequent Middleware exists,
    // the default `next()` callback is returned.
    if (!subsequentMiddleware) return context.next;

    return (...parameters) => {
        // Run the default Vue Router `next()` callback first.
        context.next(...parameters);
        // Than run the subsequent Middleware with a new
        // `nextMiddleware()` callback.
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({...context, next: nextMiddleware});
    };
}

router.beforeEach((to, from, next) => {
    const middleware = [];

    // Retrieve all middleware from the router match tree
    to.matched.forEach((match) => {
        if (match.meta.middleware) {
            middleware.push(...match.meta.middleware);
        }
    });

    if (middleware.length > 0) {
        const context = {
            from,
            next,
            router,
            to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({...context, next: nextMiddleware});
    }

    return next();
});

export default router;