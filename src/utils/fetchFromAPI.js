import axios from 'axios'

const BASE_URL= "https://youtube-v31.p.rapidapi.com"

const options = {
    params: {
        maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': "6bb345d316mshb1930f14a086b6fp1044e1jsnb88ed0536aad",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url)=>{
   const { data } = await axios.get(`${BASE_URL}/${url}`,options)

   return data;
}