const body = document.querySelector('body')
const range = document.querySelector('.range')
const rangeBar = document.querySelector('.range-bar')

function setRangeBar(percent) {
	rangeBar.style.width = `${percent}%`
	rangeBar.querySelector('span').innerText = `${percent}%`
	body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
}



range.addEventListener('mousemove', function (e) {
	const process = e.pageX - this.offsetLeft
    console.log(e.pageX)
	let percent = (process / this.offsetWidth) * 100 * 2

	percent = Math.ceil(percent)
	setRangeBar(percent)
}) 
