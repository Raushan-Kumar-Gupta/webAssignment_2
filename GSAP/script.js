var tl=gsap.timeline()
tl.to("#box1",{
    x:1000,
    rotate:360,
    duration:2,
    delay:1,
    backgroundColor:"blue"
})

// gsap.from("#box1",{
//     x:1000,
//     rotate:360,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue"
// })

tl.to("#box2",{
    x:1000,
    rotate:360,
    duration:2,
    delay:1,
    backgroundColor:"black"
})

tl.to("#box3",{
    x:1000,
    rotate:360,
    duration:2,
    delay:1,
    backgroundColor:"red"
})