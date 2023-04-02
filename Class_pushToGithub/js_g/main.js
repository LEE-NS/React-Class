let news = [];

const getLatestNews = async () => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business`);
    let header = new Headers({'x-api-key' : 'S7-GMvGtjkYMSdUosPpVNe6pIM2LAiM7Oc4PLgBB2m8'});
    let response = await fetch(url, {headers: header}); //서버에서 정보를 받아오는 가장 시간이 오래 걸리는 부분 - 비동기 처리의 필요, async, await은 함께 사용해야 동작한다.
    let data = await response.json();
    news = data.articles
    console.log(news);
    render();
};
const render = () => {
    let newsHTML = news;
    news.map((news) => {
        return
        `
        <div class="news row">
            <div class="col-lg-4">
                <img class="news-img" src="https://5.imimg.com/data5/SELLER/Default/2022/4/GX/RD/CO/2469541/pigment-yellow-168-500x500.jpg" alt="임시_이미지">
            </div>
            <div class="col-lg-8">
                <h2>뉴스 별 타이틀이 들어오는 자리</h2>
                <p>
                    뉴스의 내용이 들어오는 자리
                </p>
                <div>ABC * 2023-04-02</div>
            </div>
        </div>
        `;
    }).join('')
    document.getElementById('newsboard').innerHTML = newsHTML;
};
getLatestNews();