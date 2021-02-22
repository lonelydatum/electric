const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

const read = {
	t1: 2.7,
	t2: 1,
	t3: 2.5
}

function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	tl.from(".t1", .5, {opacity:0, y:"+=10"}, "+=.25")

	tl.add("f2_in", `+=${read.t1}`)
	tl.from(".f2", .5, {opacity:0}, "f2_in")
	tl.from(".t2", .5, {opacity:0, y:"+=10"})


	tl.add("f3_in", `+=${read.t2}`)
	tl.from(".f3", .5, {opacity:0}, "f3_in")
	tl.from(".t3", .5, {opacity:0, y:"+=10"})


	tl.to(".t3", .3, {opacity:0}, `+=${read.t3}`)
	tl.from(".t4", .5, {opacity:0, y:"+=10"})
	tl.from(".cta", .5, {opacity:0}, "+=.7")
	
	
}








export {size, start}