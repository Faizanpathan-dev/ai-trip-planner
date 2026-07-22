
import axios from "axios";

export const getGenerateImages = async (searchImage) => {

    const accesKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

    try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {

            params: {
                query: searchImage,
                per_page: 1,
                orientation: "landscape",
                client_id: accesKey
            }

        })
        return response.data.results[0]?.urls.small || null  

    } catch (error) {
        return null; 
    }
}

