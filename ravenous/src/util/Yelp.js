const apiKey = "0a1rD887-AlKdFp_8z5hdrijaFYdlZDYAZQd7tAA746QAigbtwsYHY9hqUJnORTeZRFTaorBkCjGrT7YsEA0DMy1c1ewJd7gSDAu-AGWcGdbGMD5qXiIiXFhNxT_X3Yx";

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            { 
                headers: 
                    {
                        Authorization: `Bearer ${apiKey}`
                    }
            }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return (
                        {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    )
                })
            }
        })
    }
};