import {
    // create naive ui
    create,
    // component
    NConfigProvider,
    NMessageProvider,
    NButton,
    NIcon,
    NMenu,
    NPageHeader,
    NGi,
    NStatistic,
    NGrid,
    NBreadcrumb,
    NBreadcrumbItem,
    NAvatar,
    NSpace,
    NDropdown
} from 'naive-ui'

const naive = create({
    components: [
        NConfigProvider,
        NMessageProvider,
        NButton,
        NIcon,
        NMenu,
        NPageHeader,
        NGi,
        NStatistic,
        NGrid,
        NBreadcrumb,
        NBreadcrumbItem,
        NAvatar,
        NSpace,
        NDropdown
    ],
})

export default naive
