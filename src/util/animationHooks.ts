import { useSpring, config } from "@react-spring/web";



export const useSlideAnimation = (offset: number = -300 ) => {
    const slideAnimation = useSpring({
        from: {
            opacity: 0,
            translate: offset
        },
        to: {
            opacity: 1,
            translate: 0
        },
        config: config.slow
    })


    return slideAnimation
}