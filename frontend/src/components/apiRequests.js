const apiRequest = async (url, options) => {
    let response = null;
    try {
        response = await fetch(url, options);
        console.log(response);
        if (!response.ok) throw new Error("Data not Found");
        return response;
    } catch (error) {
        return error.message;
    }
}

export default apiRequest;