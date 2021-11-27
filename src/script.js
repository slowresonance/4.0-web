var Interface = /** @class */ (function () {
    function Interface() {
        this.createCountdown();
        this.createFaqs();
    }
    Interface.prototype.createFaqs = function () {
        var faqs = document.getElementsByClassName("faq-icon");
        console.log(faqs);
        var _loop_1 = function (i) {
            var ans = document.getElementById(faqs[i].id + "-ans");
            faqs[i].addEventListener("click", function () {
                faqs[i].classList.toggle("faq-open");
                ans.classList.toggle("display-none");
            });
        };
        for (var i = 0; i < faqs.length; i++) {
            _loop_1(i);
        }
    };
    Interface.prototype.createCountdown = function () {
        var cd = document.getElementById("hero-cd-body");
        console.log(cd);
        var festStart = new Date("12/13/2021");
        var dateNow = new Date();
        var timeLeft = festStart.getTime() - dateNow.getTime();
        var days = Math.ceil(timeLeft / (1000 * 3600 * 24));
        console.log(days);
        cd.innerHTML = "" + days;
    };
    return Interface;
}());
var interface = new Interface();
