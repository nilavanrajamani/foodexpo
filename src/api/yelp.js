import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer l5UqN-4mf3H8kyKJwgNADfodxwLBIIYnY6XcNHNGS582VkvGwEH3AnnRyK68IR74zw7j2kYMF1GFXhmwWsfTp9XKZoucxm2xXXR5LjR6-TdQrJoWZGN9kpSTaUWJZXYx'
    }
});