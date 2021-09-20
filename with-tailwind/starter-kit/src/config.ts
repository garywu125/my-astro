import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    podcast: {
        path: '/podcast',
        title: 'podcast'
    },
    about: {
        path: '/about',
        title: 'about'
    },
    bluma: {
        path: '/mybulma',
        title: 'Bulma'
    },
    cv: {
        path: '/cv',
        title: 'Resume'
    },

}

export type SiteNavItem =  keyof typeof NAV_ITEMS

export const SITE = {

}
