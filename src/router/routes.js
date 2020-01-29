import Home from '@/views/Home';
import TakePart from '@/views/TakePart';
import About from '@/views/About';
import FAQ from '@/views/FAQ';

import Terms from '@/views/shared/static/Terms';

export const routes = [
    {
        path: '/:lang',
        component: { render (c) { return c('router-view') } },
        children: [
            {
                path: "",
                component: Home,
                meta: {i18n: "navigation-homepage",nav: false}
            },
            {
                path: "take-part",
                component: TakePart,
                meta: {i18n: 'navigation-take-part', nav: true}
            },
            {
                path: "about",
                component: About,
                meta: {i18n: 'navigation-about', nav: true}
            },
            {
                path: "faq",
                component: FAQ,
                meta: {i18n: 'navigation-faq', nav: true}
            },
            {
                path: "terms",
                component: Terms,
                meta: {i18n: "navigation-terms", nav: false}
            }
        ]
    }
];
