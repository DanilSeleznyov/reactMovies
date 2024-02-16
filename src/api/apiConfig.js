const apiConfig={
    baseUrl:'https://api.themoviedb.org/3/', 
    apiKey: '7c816abeef67b86e372a54d479a83a7d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig