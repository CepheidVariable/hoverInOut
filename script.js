var arrCards = [ new ImageItem('./assets/2c.png'),
                new ImageItem('./assets/3c.png'),
                new ImageItem('./assets/4c.png'),
                new ImageItem('./assets/5c.png'),
                new ImageItem('./assets/6c.png'),
                new ImageItem('./assets/7c.png'),
                new ImageItem('./assets/8c.png'),
                new ImageItem('./assets/9c.png'),
                new ImageItem('./assets/10c.png'),
                new ImageItem('./assets/jc.png'),
                new ImageItem('./assets/qc.png'),
                new ImageItem('./assets/kc.png'),
                new ImageItem('./assets/ac.png'),
                new ImageItem('./assets/2s.png'),
                new ImageItem('./assets/3s.png'),
                new ImageItem('./assets/4s.png'),
                new ImageItem('./assets/5s.png'),
                new ImageItem('./assets/6s.png'),
                new ImageItem('./assets/7s.png'),
                new ImageItem('./assets/8s.png'),
                new ImageItem('./assets/9s.png'),
                new ImageItem('./assets/10s.png'),
                new ImageItem('./assets/js.png'),
                new ImageItem('./assets/qs.png'),
                new ImageItem('./assets/ks.png'),
                new ImageItem('./assets/as.png'),
                new ImageItem('./assets/2h.png'),
                new ImageItem('./assets/3h.png'),
                new ImageItem('./assets/4h.png'),
                new ImageItem('./assets/5h.png'),
                new ImageItem('./assets/6h.png'),
                new ImageItem('./assets/7h.png'),
                new ImageItem('./assets/8h.png'),
                new ImageItem('./assets/9h.png'),
                new ImageItem('./assets/10h.png'),
                new ImageItem('./assets/jh.png'),
                new ImageItem('./assets/qh.png'),
                new ImageItem('./assets/kh.png'),
                new ImageItem('./assets/ah.png'),
                new ImageItem('./assets/2d.png'),
                new ImageItem('./assets/3d.png'),
                new ImageItem('./assets/4d.png'),
                new ImageItem('./assets/5d.png'),
                new ImageItem('./assets/6d.png'),
                new ImageItem('./assets/7d.png'),
                new ImageItem('./assets/8d.png'),
                new ImageItem('./assets/9d.png'),
                new ImageItem('./assets/10d.png'),
                new ImageItem('./assets/jd.png'),
                new ImageItem('./assets/qd.png'),
                new ImageItem('./assets/kd.png'),
                new ImageItem('./assets/ad.png'),
];
function ImageItem(src){
    this.image = new Image();
    this.src = src;
};

// function loadImages(element){
//     for (let i = 0; i < arrCards.length; i++) {
//     };

function getCard() {
    min = Math.ceil(1);
    max = Math.floor(53);
    return Math.floor(Math.random() * (53 - 1) + 1);
};
                
$(document).ready(function() {

    console.log(arrCards);
    $(".flip-box").hover(function(){
        getCard();
        console.log(getCard());
    
    });
});