
import axios from "axios";

export const getGenerateImages = async (searchImage, fallbackUrl = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&auto=format&fit=crop") => {

    const accesKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

    try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {

            params: { /// ye ek query parameter hai jo url me add hota 
                query: searchImage,
                per_page: 1,
                orientation: "landscape",
                client_id: accesKey
            }


        })
        return response.data.results[0]?.urls.small || fallbackUrl

    } catch (error) {
        return fallbackUrl;
    }
}

