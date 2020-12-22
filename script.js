var arrCards = [    new ImageItem('./assets/2C.png'),
                    new ImageItem('./assets/3C.png'),
                    new ImageItem('./assets/4C.png'),
                    new ImageItem('./assets/5C.png'),
                    new ImageItem('./assets/6C.png'),
                    new ImageItem('./assets/7C.png'),
                    new ImageItem('./assets/8C.png'),
                    new ImageItem('./assets/9C.png'),
                    new ImageItem('./assets/10C.png'),
                    new ImageItem('./assets/JC.png'),
                    new ImageItem('./assets/QC.png'),
                    new ImageItem('./assets/KC.png'),
                    new ImageItem('./assets/AC.png'),
                    new ImageItem('./assets/2S.png'),
                    new ImageItem('./assets/3S.png'),
                    new ImageItem('./assets/4S.png'),
                    new ImageItem('./assets/5S.png'),
                    new ImageItem('./assets/6S.png'),
                    new ImageItem('./assets/7S.png'),
                    new ImageItem('./assets/8S.png'),
                    new ImageItem('./assets/9S.png'),
                    new ImageItem('./assets/10S.png'),
                    new ImageItem('./assets/JS.png'),
                    new ImageItem('./assets/QS.png'),
                    new ImageItem('./assets/KS.png'),
                    new ImageItem('./assets/AS.png'),
                    new ImageItem('./assets/2H.png'),
                    new ImageItem('./assets/3H.png'),
                    new ImageItem('./assets/4H.png'),
                    new ImageItem('./assets/5H.png'),
                    new ImageItem('./assets/6H.png'),
                    new ImageItem('./assets/7H.png'),
                    new ImageItem('./assets/8H.png'),
                    new ImageItem('./assets/9H.png'),
                    new ImageItem('./assets/10H.png'),
                    new ImageItem('./assets/JH.png'),
                    new ImageItem('./assets/QH.png'),
                    new ImageItem('./assets/KH.png'),
                    new ImageItem('./assets/AH.png'),
                    new ImageItem('./assets/2D.png'),
                    new ImageItem('./assets/3D.png'),
                    new ImageItem('./assets/4D.png'),
                    new ImageItem('./assets/5D.png'),
                    new ImageItem('./assets/6D.png'),
                    new ImageItem('./assets/7D.png'),
                    new ImageItem('./assets/8D.png'),
                    new ImageItem('./assets/9D.png'),
                    new ImageItem('./assets/10D.png'),
                    new ImageItem('./assets/JD.png'),
                    new ImageItem('./assets/QD.png'),
                    new ImageItem('./assets/KD.png'),
                    new ImageItem('./assets/AD.png'),
];
function ImageItem(src){
    this.image = new Image();
    this.src = src;
};

function getCard() {
    min = Math.ceil(0);
    max = Math.floor(52);
    return Math.floor(Math.random() * (52 - 0 + 1) + 0);
};

$(document).ready(function() {

    console.log(arrCards);
    $(".flip-box").hover(function(){
        $(this).find(".flip-box-back img").attr("src", arrCards[getCard()].src);
        $(this).children(".flip-box-inner").css("transform" , "rotateY(-180deg)");
    },
    function(){
            $(this).children(".flip-box-inner").css("transform" , "rotateY(0deg)");
    });
});