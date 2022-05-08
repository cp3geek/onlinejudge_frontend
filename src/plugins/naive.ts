import {
    // create naive ui
    create,
    // component
    NConfigProvider,
    NMessageProvider,
    NButton,
    NIcon,
    NMenu,
} from 'naive-ui'

const naive = create({
    components: [
        NConfigProvider,
        NMessageProvider,
        NButton,
        NIcon,
        NMenu
    ],
})

export default naive
