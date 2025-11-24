import SunIcon from "/ecomerce-website-sneakers/images/icon-sun.svg"
import MoonIcon from "/ecomerce-website-sneakers/images/icon-moon.svg"
import Logo from "/ecomerce-website-sneakers/images/logo.svg"
import LogoDark from "/ecomerce-website-sneakers/images/logo-dark.svg"

import HomeSolid from "/ecomerce-website-sneakers/images/ehome-solid.svg"
import HomeSolidDark from "/ecomerce-website-sneakers/images/ehome-solid-dark.svg"
import BriefCaseSolid from "/ecomerce-website-sneakers/images/work-solid.svg"
import BriefCaseSolidDark from "/ecomerce-website-sneakers/images/work-solid-dark.svg"

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            backgroundColor: 'bg-white',
            textColor:'text-neutral-dark-grayish-blue',
        },
        icon: MoonIcon,
        logo: Logo,
        home: HomeSolidDark,
        work: BriefCaseSolidDark
    },
        dark: {
        name: 'dark',
        layout: {
            backgroundColor: 'bg-neutral-very-dark-desaturated-blue',
            textColor:'text-neutral-very-dark-grayish-blue',
        },
        icon: SunIcon,
        logo: LogoDark,
        home: HomeSolid,
        work: BriefCaseSolid
    },

}