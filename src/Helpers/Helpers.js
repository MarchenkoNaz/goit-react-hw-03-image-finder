const KEY = '37523612-016e16a6549b7a098e67dc77e';
const BASE_URL = 'https://pixabay.com/api'


export const fetchData = async (searchTerm = '', currentPage = 1) => {
	try {
		const response = await fetch(
			`${BASE_URL}/?q=${searchTerm}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
		)
		const data = response.json()
		return await data
	}
	catch (e) { console.log(e) }

}