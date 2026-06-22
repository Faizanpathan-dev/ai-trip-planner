
import axios from "axios";

export const getGenerateImages = async (searchImage) => {

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
        return response.data.results[0]?.urls.small || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"

    } catch (error) {
        return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop";
    }
}

