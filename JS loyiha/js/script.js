window.addEventListener('DOMContentLoaded', () => {
	const tabParent = document.querySelector('.tabheader__items'),
		tabs = document.querySelectorAll('.tabheader__item'),
		tabContent = document.querySelectorAll('.tabcontent'),
		loader = document.querySelector('.loader')
	// Loader

	setTimeout(() => {
		loader.style.opacity = '0'
		setTimeout(() => {
			loader.style.display = 'none'
		}, 500)
	}, 2000)

	// Tabs
	function hideTabs() {
		tabContent.forEach(item => {
			item.classList.add('hide')
			item.classList.remove('show')
		})

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active')
		})
	}

	hideTabs()

	function showTabContent(index) {
		tabContent[index].classList.add('show')
		tabContent[index].classList.remove('hide')
		tabs[index].classList.add('tabheader__item_active')
	}

	showTabContent(0)

	tabParent.addEventListener('click', e => {
		const target = e.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, idx) => {
				if (item === target) {
					hideTabs()
					showTabContent(idx)
				}
			})
		}
	})

	// Date remaining

	const deadline = '2023-09-12'

	function getRemainingDate(endtime) {
		let days, hours, minutes, seconds;
		const timer = Date.parse(endtime) - Date.parse(new Date())

		if (timer < 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(timer / (1000 * 60 * 60 * 24));
			hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
			minutes = Math.floor((timer / 1000 / 60) % 60);
			seconds = Math.floor((timer / 1000) % 60);
		}

		return { timer, days, hours, minutes, seconds }
	}

	function getZero(num) {
		if (num < 10) {
			return `0${num}`
		} else {
			return num
		}
	}

	function setClock(selector, deadline) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timerEnd = setInterval(updateClock, 1000)

		updateClock()

		function updateClock() {
			const t = getRemainingDate(deadline)
			days.innerHTML = getZero(t.days)
			hours.innerHTML = getZero(t.hours)
			minutes.innerHTML = getZero(t.minutes)
			seconds.innerHTML = getZero(t.seconds)

			if (t.timer <= 0) {
				clearInterval(timerEnd)
			}
		}
	}

	setClock('.timer', deadline)
})
