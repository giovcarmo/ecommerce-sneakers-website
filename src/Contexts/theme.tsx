import SunIcon from "/images/icon-sun.svg"
import MoonIcon from "/images/icon-moon.svg"
import Logo from "/images/logo.svg"
import LogoDark from "/images/logo-dark.svg"

import HomeSolid from "/images/ehome-solid.svg"
import HomeSolidDark from "/images/ehome-solid-dark.svg"
import BriefCaseSolid from "/images/work-solid.svg"
import BriefCaseSolidDark from "/images/work-solid-dark.svg"

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