let container = document.querySelector('.container')

for(let i =0; i <900; i++){
	console.log(i);
	let dot = document.createElement("div");
	dot.classList.add("element");
	container.appendChild(dot)
}

let grid =[30, 30]

let dotAll = document.querySelectorAll('.element')
 let animation = anime.timeline({
	targets: dotAll,
	easing:"easeInOutExpo",
	loop: true
 })

 animation.add({
		rotate: function () {
			return anime.random(0, 0)
		},
		translateY: function () {
			return anime.random(0, 0)
		},
		translateX: function () {
			return anime.random(0, 0)
		},
		delay: anime.stagger(100, { grid: grid, from: 'last' }),
		keyframes: [
			{
				background: '#fff',
			},
			{
				background: '#333',
			},
			// {
			// 	background: '#f0f',
			// },
			// {
			// 	background: '#ff0',
			// },
			// {
			// 	background: '#0ff',
			// }, 
		],
 })