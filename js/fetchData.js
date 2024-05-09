
export const fetchData = async () => {
	try {
		const response = await fetch('https://glitch.com/edit/#!/aerial-tar-mushroom?path=schedule.json%3A1%3A0/api');
		if(!response.ok) {
			throw new Error(`HTTP error Status: ${response.status}`)
		}
		return await response.json();
		
	} catch (error) {
		console.error(`Ошибка при получении данных: ${error}`)
	}
}