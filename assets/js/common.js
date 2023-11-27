fetch("./assets/js/data-love.json")
    .then((res) => res.json())
    .then((json) => {
        data = json.titleList;
        let html = ``;
        data.forEach((element) => {
            html += `    <div class="swiper-slide">
                <a href="https://comic.naver.com/webtoon/list?titleId=${element.titleId}">
                <div class="img-box">
                    <img src="${element.thumbnailUrl}" alt=""></div>
                    <strong class="title">${element.titleName}</strong>
                    <p class="author">${element.displayAuthor}</p>
                </a>
          </div>`;
        });
        $(".love .swiper-wrapper").html(html);
    });
fetch("./assets/js/data-seulilleo.json")
    .then((res) => res.json())
    .then((json) => {
        data = json.titleList;
        let html = ``;
        data.forEach((element) => {
            html += `    <div class="swiper-slide">
                <a href="https://comic.naver.com/webtoon/list?titleId=${element.titleId}">
                <div class="img-box">
                    <img src="${element.thumbnailUrl}" alt=""></div>

                    <strong class="title">${element.titleName}</strong>
                    <p class="author">${element.displayAuthor}</p>
                </a>
          </div>`;
        });
        $(".seulilleo .swiper-wrapper").html(html);
    });
fetch("./assets/js/data-comic.json")
    .then((res) => res.json())
    .then((json) => {
        data = json.titleList;
        let html = ``;
        data.forEach((element) => {
            html += `    <div class="swiper-slide">
                <a href="https://comic.naver.com/webtoon/list?titleId=${element.titleId}">
                <div class="img-box">
                    <img src="${element.thumbnailUrl}" alt=""></div>

                    <strong class="title">${element.titleName}</strong>
                    <p class="author">${element.displayAuthor}</p>
                </a>
            </div>`;
        });
        $(".comic .swiper-wrapper").html(html);
    });
fetch("./assets/js/data-rank.json")
    .then((res) => res.json())
    .then((json) => {
        data = json.totalRankingTitleList;
        let html = ``;
        upEl = '<span class="up"></span>';
        data.forEach((element) => {
            up = element.up ? upEl : "";
            html += ` 
            
            <a href="https://comic.naver.com/webtoon/list?titleId=${element.titleId}">
            <div class="rank-box">
                            <div class="img-box">
                                <img src="${element.thumbnailUrl}" alt="" />
                            </div>
                            <div class="text-box">
                                <div class="number">
                                    <em>${element.rank}</em>
                                </div>
                                <div class="info">
                                    <strong class="title">${element.titleName}</strong> ${up}
                                    <p class="desc">${element.titleName}</p>
                                </div>
                            </div>
                        </div>
         </a>
          `;
        });
        $(".sc-rank .swiper-wrapper .swiper-slide:nth-child(1)").html(html);
        $(".sc-rank .swiper-wrapper .swiper-slide:nth-child(3)").html(html);
    });

fetch("./assets/js/data-rank.json")
    .then((res) => res.json())
    .then((json) => {
        data2 = json.femaleRankingTitleList;
        let html = ``;
        upEl = '<span class="up"></span>';
        data2.forEach((element) => {
            up = element.up ? upEl : "";
            html += ` 
            
            <a href="https://comic.naver.com/webtoon/list?titleId=${element.titleId}">
            <div class="rank-box">
                            <div class="img-box">
                                <img src="${element.thumbnailUrl}" alt="" />
                            </div>
                            <div class="text-box">
                                <div class="number">
                                    <em>${element.rank}</em>
                                </div>
                                <div class="info">
                                    <strong class="title">${element.titleName}</strong> ${up}
                                    <p class="desc">${element.titleName}</p>
                                </div>
                            </div>
                        </div>
         </a>
          `;
        });
        $(".sc-rank .swiper-wrapper .swiper-slide:nth-child(2)").html(html);
        $(".sc-rank .swiper-wrapper .swiper-slide:nth-child(4)").html(html);
    });

///////data-tiime

fetch("./assets/js/data-time.json")
    .then((res) => res.json())
    .then((json) => {
        data = json.totalRankingTitleList;
        let html = ``;
        cutEl = '<span class="cut"></span>';
        data.forEach((element) => {
            cut = element.cut ? cutEl : "";
            html += ` 
            
            <a href="https://comic.naver.com/webtoon/list?titleId=${element.titleId}">
            <div class="rank-box">
                            <div class="img-box">
                                <img src="${element.thumbnailUrl}" alt="" />
                            </div>
                            <div class="text-box">
                                <div class="number">
                                    <em>${element.rank}</em>
                                </div>
                                <div class="info">
                                    <strong class="title">${element.titleName}</strong> ${cut}
                                    <p class="desc">${element.titleName}</p>
                                </div>
                            </div>
                        </div>
         </a>
          `;
        });
        $(".sc-time .swiper-wrapper .swiper-slide:nth-child(1)").html(html);
        $(".sc-time .swiper-wrapper .swiper-slide:nth-child(3)").html(html);
        $(".sc-time .swiper-wrapper .swiper-slide:nth-child(5)").html(html);
    });

fetch("./assets/js/data-time.json")
    .then((res) => res.json())
    .then((json) => {
        data2 = json.femaleRankingTitleList;
        let html = ``;
        cutEl = '<span class="cut"></span>';
        data2.forEach((element) => {
            cut = element.cut ? cutEl : "";
            html += ` 
            
            <a href="https://comic.naver.com/webtoon/list?titleId=${element.titleId}">
            <div class="rank-box">
                            <div class="img-box">
                                <img src="${element.thumbnailUrl}" alt="" />
                            </div>
                            <div class="text-box">
                                <div class="number">
                                    <em>${element.rank}</em>
                                </div>
                                <div class="info">
                                    <strong class="title">${element.titleName}</strong> ${cut}
                                    <p class="desc">${element.titleName}</p>
                                </div>
                            </div>
                        </div>
         </a>
          `;
        });
        $(".sc-time .swiper-wrapper .swiper-slide:nth-child(2)").html(html);
        $(".sc-time .swiper-wrapper .swiper-slide:nth-child(4)").html(html);
        $(".sc-time .swiper-wrapper .swiper-slide:nth-child(6)").html(html);
    });
