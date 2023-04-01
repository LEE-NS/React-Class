const getLatestNews = () => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business`);
    let header = new Headers({'x-api-key' : 'GMvGtjkYMSdUosPpVNe6pIM2LAiM7Oc4PLgBB2m8'});
    let response = fetch(url, {headers: header});
};
getLatestNews();