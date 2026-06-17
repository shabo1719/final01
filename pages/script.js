const params = new URLSearchParams(window.location.search);
const genre = params.get("genre");

const data = {

    horror:{

        images:[

            {
                img:"../horror/h1.jpeg",

                title:"제 1법칙",

                x:330,
                y:80,

                w:400,
                h:410,

                gif:"../horror/hmain.png",

                text:"Observation result NO.1<br><br>주인공은 보통 겁이 없고 호기심이 강한 경향성을 보임.<br><br><br><br>인기도 ✦✧✧✧✧<br> 난이도 ✦✦✦✦✧ "
            },

            {
                img:"../horror/h2.png",

                title:"제 2법칙",

                x:308,
                y:240,

                w:380,
                h:290,

                gif:"../horror/hh5.png",

                text:"Observation result NO.2<br><br>하지 말라는 건 꼭 해보는 충동이 있음.<br>보통 친구가 해보자고 하면 응하는 식의 대응을 하는 비율이 많았음."
            },

            {
                img:"../horror/h3.png",

                title:"제 3법칙",

                x:168,
                y:177,

                w:289,
                h:367,

                gif:"../horror/hh3.png",

                text:"Observation result NO.3<br><br>방송 송출 시도는 예외없이 실패함.<br>무겁기만 한 장비 가져와 찍지 않을 것을 추천함."
            },

            {
                img:"../horror/h4.png",

                title:"제 4법칙",

                x:347,
                y:100,

                w:280,
                h:520,

                gif:"../horror/hh4.png",

                text:"Observation result NO.4<br><br>누가 봐도 수상해 보이는 물건을 주워옴.<br>관찰 결과 버려도 버려도 어차피 되돌아오니 버리지 않을 것을 권장함."
            }

        ]

    },

war:{

        images:[

            {
                img:"../war/w1.png",

                title:"제 1법칙",

                x:430,
                y:80,

                w:350,
                h:350,

                gif:"../war/wmain.png",

                text:"Observation result NO.1<br><br>어리버리함.<br>폐급 병사가 주인공인 경우가 대다수이나 총알이 전부 주인공을 비껴가 어찌저찌 끝까지 살아남음.<br><br><br>인기도 ✦✧✧✧✧<br>난이도 ✦✦✦✦✧"
            },

            {
                img:"../war/w2.jpeg",

                title:"제 2법칙",

                x:383,
                y:60,

                w:459,
                h:510,

                gif:"../war/ww2.png",

                text:"Observation result NO.2<br><br>전쟁 중 가족 또는 연인의 사진을 챙겨온 인물이 있다면 주의할 것.<br>99.9% 죽거나 죽는것과 유사한 상태가 되는 것을 확인. 주인공의 멘탈관리를 위해 주변인을 단속할 것."
            },

            {
                img:"../war/w3.jpeg",

                title:"제 3법칙",

                x:665,
                y:177,

                w:288,
                h:288,

                 gif:"../war/ww3.png",

                text:"Observation result NO.3<br><br>주변인에게 정을 주지 말것.<br>주인공은 절대 죽지 않지만 정든 동료는 얼마든지 죽을 수 있음을 발견."
            },

            {
                img:"../war/w4.jpeg",

                title:"제 4법칙",

                x:342,
                y:440,

                w:280,
                h:190,

                 gif:"../war/ww4.png",

                text:"Observation result NO.4<br><br>모두를 살리기 위해서 몸을 날려 막은 수류탄은 불발탄.<br>죽지도 않는데 몸 날려서 수류탄을 막았다가 머쓱해지는 상황이 오지 않도록 유의."
            }

        ]

    },



zombie:{

        images:[

            {
                img:"../zombie/z1.png",

                title:"제 1법칙",

                x:80,
                y:78,

                w:250,
                h:250,

                gif:"../zombie/zmain.png",

                text:"Observation result NO.1<br><br>일단 어떤 행동을 해도 절대 물리지 않음.<br>절대 감염되지않고 설사 감염이 되더라도 살아남는 경우 다수 관찰됨.<br><br><br>인기도 ✦✧✧✧✧<br> 난이도 ✦✦✦✦✦"
            },

            {
                img:"../zombie/z2.jpeg",

                title:"제 2법칙",

                x:671,
                y:210,

                w:281,
                h:281,

                gif:"../zombie/zz2.png",

                text:"Observation result NO.2<br><br>운이 상당히 좋음.<br>같은 행동을 해도 주인공과 엑스트라의 결말은 고정적으로 확정됨."
            },

            {
                img:"../zombie/z3.png",

                title:"제 3법칙",

                x:268,
                y:47,

                w:289,
                h:197,

                gif:"../zombie/zz3.png",

                text:"Observation result NO.3<br><br>높은 확률로 항체 보유자임.<br>주인공의 경우 체내에 좀비 바이러스의 항체가 있는 경우가 많으니 뻘짓하다가 죽을 뻔하지 말고 스스로의 몸 상태를 확실히 체크하는 것이 좋아보임."
            },

            {
                img:"../zombie/z4.png",

                title:"제 4법칙",

                x:467,
                y:44,

                w:410,
                h:440,

                gif:"../zombie/zz4.png",

                text:"Observation result NO.4<br><br>타 장르보다도 빌런의 명줄이 끈질긴 것을 확인.<br>주인공의 경우 빌런에 의해 소중한 사람을 잃지 않도록 조심할것."
            }

        ]

    },


hero:{

        images:[

            {
                img:"../hero/h1.jpeg",

                title:"제 1법칙",

                x:350,
                y:100,

                w:260,
                h:310,

                gif:"../hero/smain.png",

                text:"Observation result NO.1<br><br>주인공은 꼭 찐따부터 시작.<br>덥수룩한 갈색머리에 뿔테 안경.<br><br><br><br>인기도 ✦✦✦✦✦<br> 난이도 ✦✦✦✧✧"
            },

            {
                img:"../hero/h2.jpg",

                title:"제 2법칙",

                x:245,
                y:40,

                w:454,
                h:340,
                gif:"../hero/hh2.png",

                text:"Observation result NO.2<br><br>애매한 힘에 큰 책임.<br>소중한 사람이 각성의 기회로 쓰이게 될 수 있으니 각오해둘것."
            },

            {
                img:"../hero/h3.jpeg",

                title:"제 3법칙",

                x:268,
                y:47,

                w:289,
                h:548,

                gif:"../hero/hh3.gif",

                text:"Observation result NO.3<br><br>뒤늦은 사춘기가 오는 경우가 있음.<br>과도한 억압 시 뒤늦게 사춘기가 발현되어 후회할 짓을 할 수 있으니 조심할것."
            },

            {
                img:"../hero/h4.jpeg",

                title:"제 4법칙",

                x:227,
                y:44,

                w:410,
                h:440,

                gif:"../hero/hh4.png",

                text:"Observation result NO.4<br><br>어떻게 해도 죽지 않으니 과감한 전투를 시도해볼것.<br>하늘에서 떨어져도, 거대 악당에게 온 힘을 다해 밟혀도 죽지 않는 것을 다수 확인."
            }

        ]

    },


kteen:{

        images:[

            {
                img:"../kteen/k1.png",

                title:"제 1법칙",

                x:200,
                y:70,

                w:350,
                h:350,

                gif:"../kteen/kmain.png",

                text:"Observation result NO.1<br><br>주인공은 찐따.<br>한국의 하이틴 특성상 어두운 분위기가 많음.<br><br><br><br>인기도 ✦✦✦✧✧<br>난이도 ✦✦✦✦✧"
            },

            {
                img:"../kteen/k2.jpeg",

                title:"제 2법칙",

                x:280,
                y:85,

                w:191,
                h:204,

                gif:"../kteen/kk2.png",

                text:"Observation result NO.2<br><br>죽고 싶을 만큼 심하게 괴롭힘 당해야 전개가 시작됨.<br>주인공이 아니라 친구가 당하는 경우 또한 종종 존재함."
            },

            {
                img:"../kteen/k3.jpeg",

                title:"제 3법칙",

                x:178,
                y:177,

                w:289,
                h:197,

                gif:"../kteen/kk3.png",

                text:"Observation result NO.3<br><br>성적에 대한 집착이 심한 경향을 보임.<br>한국사회의 특징이 반영되어 공부를 잘하는 것 또한 서열의 일부가 됨."
            },

            {
                img:"../kteen/k4.jpeg",

                title:"제 4법칙",

                x:467,
                y:44,

                w:410,
                h:440,

                gif:"../kteen/kk4.png",

                text:"Observation result NO.4<br><br>어른들은 아무 도움을 주지 않음.<br>어른의 도음을 통한 해결사례 소수인 것으로 파악. 오히려 주인공을 더 힘들게 만드는 경우 다수."
            }

        ]

    },
crime:{

        images:[

            {
                img:"../crime/c1.png",

                title:"제 1법칙",

                x:69,
                y:160,

                w:280,
                h:250,

                gif:"../crime/cmain.png",

                text:"Observation result NO.1<br><br>의욕없는 주인공 다수 관찰.<br>괴짜인 경우가 많음. 사건을 제외하면 능력치 떨어짐.<br><br><br><br>인기도 ✦✦✦✦✦<br> 난이도 ✦✦✦✧✧"
            },

            {
                img:"../crime/c2.jpeg",

                title:"제 2법칙",

                x:371,
                y:170,

                w:171,
                h:150,

                gif:"../crime/cc2.png",

                text:"Observation result NO.2<br><br>중간에 범인을 절대 알려주지 않음.<br>자기 혼자만 알고있다가 나중에 으스대며 알려주는 경우가 많음."
            },

            {
                img:"../crime/c3.png",

                title:"제 3법칙",

                x:49,
                y:157,

                w:319,
                h:337,

                gif:"../crime/cc3.png",

                text:"Observation result NO.3<br><br>천상천하 유아독존.<br>자신보다 멍청하면 무시하는 것인 추리물 주인공의 소양."
            },

            {
                img:"../crime/c4.jpeg",

                title:"제 4법칙",

                x:147,
                y:44,

                w:550,
                h:400,

                gif:"../crime/cc4.png",

                text:"Observation result NO.4<br><br>파트너가 있음.<br>성격이 정반대인 파트너와 늘상 함께해야하니 사생활은 포기할것."
            }

        ]

    },


};
const genreTitle =
document.getElementById("genreTitle");

const genreNames = {

    horror:"OBSERVATION : HORROR",
    zombie:"OBSERVATION : ZOMBIE",
    war:"OBSERVATION : WAR",
    hero:"OBSERVATION : SUPER HERO",
    kteen:"OBSERVATION : K-TEEN",
    crime:"OBSERVATION : CRIME"

};

genreTitle.textContent =
genreNames[genre] || "HORROR";
const current = data[genre] || data.horror;

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");

const thumbs =
document.querySelectorAll(".side-screen img");

const ruleBox =
document.getElementById("ruleBox");

const ruleTitle =
document.getElementById("ruleTitle");

const overlay =
document.getElementById("overlay");

const overlayTitle =
document.getElementById("overlayTitle");

const overlayText =
document.getElementById("overlayText");

const overlayGif =
document.getElementById("overlayGif");

const closeBtn =
document.getElementById("closeBtn");

function render(){

    const currentItem =
    current.images[currentIndex];

    mainImage.src =
    currentItem.img;

    ruleTitle.textContent =
    currentItem.title;

    ruleBox.style.left =
    currentItem.x + "px";

    ruleBox.style.top =
    currentItem.y + "px";

    ruleBox.style.width =
    currentItem.w + "px";

    ruleBox.style.height =
    currentItem.h + "px";

    thumbs.forEach((img,index)=>{

        const nextIndex =
        (currentIndex + index + 1) %
        current.images.length;

        img.src =
        current.images[nextIndex].img;

    });

}

thumbs.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex =
        (currentIndex + index + 1) %
        current.images.length;

        render();

    });

});



ruleBox.addEventListener("click",()=>{

    const currentItem =
    current.images[currentIndex];

    overlayTitle.textContent =
    currentItem.title;

    overlayText.innerHTML =
    currentItem.text;

    overlayGif.src =
    currentItem.gif;

   

    setTimeout(()=>{

        overlay.classList.add("active");

    },400);

});

closeBtn.addEventListener("click",()=>{

    overlay.classList.remove("active");

});

render();