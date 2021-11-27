class Interface {
  constructor() {
    this.createCountdown();
    this.createFaqs();
  }

  createFaqs() {
    let faqs = document.getElementsByClassName("faq-icon");
    console.log(faqs);
    for (let i = 0; i < faqs.length; i++) {
      let ans = document.getElementById(`${faqs[i].id}-ans`);
      faqs[i].addEventListener("click", () => {
        faqs[i].classList.toggle("faq-open");
        ans.classList.toggle("display-none");
      });
    }
  }

  createCountdown() {
    let cd = document.getElementById("hero-cd-body");
    console.log(cd);

    let festStart = new Date("12/13/2021");
    let dateNow = new Date();

    let timeLeft = festStart.getTime() - dateNow.getTime();
    let days = Math.ceil(timeLeft / (1000 * 3600 * 24));

    console.log(days);

    cd.innerHTML = `${days}`;
  }
}

let interface = new Interface();
