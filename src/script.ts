type Session = {
  text: string;
  params: string;
};

class Interface {
  eventFrames: HTMLCollection;
  eventLinks: HTMLCollection;
  faqs: HTMLCollection;
  eventContent: JSON;
  fav: HTMLElement;

  constructor(eventContent: string) {
    this.eventContent = JSON.parse(eventContent);
    this.createCountdown();
    this.createSchedule();
    this.simulateClick();
    this.highlightFaqs();

    this.fav = document.getElementById("fav");
    setInterval(this.favicon, 100);
  }

  favicon() {
    let currentFav = parseInt(this.fav.getAttribute("href")[17]);
    currentFav = (currentFav + 1) % 8;
    this.fav.setAttribute("href", `./assets/favicon-${currentFav}.png`);
  }

  highlightFaqs() {
    this.faqs = document.getElementsByClassName("faq-ques");
    for (let i = 0; i < this.faqs.length; i++) {
      this.faqs[i].addEventListener("click", (e) => {
        let faq = document.getElementById((<HTMLInputElement>e.target).id);
        faq.classList.toggle("faq-focus");
      });
    }
  }

  simulateClick() {
    document.getElementById("a01").click();
    document.getElementById("b11").click();
  }

  createSchedule() {
    this.eventFrames = document.getElementsByClassName("event-frame");
    this.eventLinks = document.getElementsByClassName("event-links");

    for (let i = 0; i < this.eventLinks.length; i++) {
      this.eventLinks[i].addEventListener("click", () => {
        let targetId = this.eventLinks[i].id;
        this.updateButton(targetId);
        this.updateFrame(parseInt(targetId[1]), parseInt(targetId[2]));
      });
    }
  }

  updateButton(targetId: string) {
    for (let i = 0; i < this.eventLinks.length; i++) {
      if (this.eventLinks[i].id.startsWith(targetId[0])) {
        this.eventLinks[i].classList.remove("active-event");
      }
    }
    let focusElement = document.getElementById(targetId);
    focusElement.classList.add("active-event");
  }

  updateFrame(frameId: number, eventId: number) {
    this.clearFrame(frameId);
    let eventDesc = document.createElement("div");
    let eventParams = document.createElement("div");
    eventDesc.classList.add("event-desc");
    eventParams.classList.add("event-params");

    let eId = `${frameId}${eventId}`;

    for (let i = 0; i < this.eventContent[eId].text.length; i++) {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = this.eventContent[eId].text[i];
      eventDesc.append(paragraph);
    }

    for (let i = 0; i < this.eventContent[eId].params.length; i++) {
      let eventParam = document.createElement("div");
      eventParam.classList.add("param");
      eventParam.innerHTML = this.eventContent[eId].params[i];
      eventParams.append(eventParam);
    }

    this.eventFrames[frameId].append(eventDesc);
    this.eventFrames[frameId].append(eventParams);
  }

  clearFrame(frameId: number) {
    while (this.eventFrames[frameId].firstChild) {
      this.eventFrames[frameId].removeChild(
        this.eventFrames[frameId].firstChild
      );
    }
  }

  createCountdown() {
    let cd = document.getElementById("hero-right-bot");

    let festStart = new Date("12/13/2021");
    let dateNow = new Date();

    let timeLeft = festStart.getTime() - dateNow.getTime();
    let days = Math.ceil(timeLeft / (1000 * 3600 * 24));

    cd.innerHTML = `${days}`;
  }
}

// https://jsontostring.com/

let content = `{"11":{"text":["Challenge your ethical thinking in this tricky test of empathy.","In round 1, you and your partner will be tasked to find the ethically sound solutions to real world problems and situations ","Put your internet and network etiquette to the test!","In round 2, you’ll have to choose between two similar products to decide which can be considered “IP Right” and free against any potential violations"],"params":[]},"12":{"text":["Flex your brain-muscles in this test of memory and wits!","In round 1, you’ll have to juggle answering questions with remembering select keywords which build up as time goes on!","An Entrepreneurial twist on the latest hit series!"],"params":[]},"13":{"text":["How much can you answer before time runs out?","In round 21, play in a live quiz and answer questions about aptitude, case studies, entrepreneurship, psychometrics and much more!","In the world of business, what are you willing to sacrifice?","In round 2, you’ll have to make strong decisions in order to make the best of the given scenario, each with its own strengths and weaknesses."],"params":[]},"01":{"text":["Put on your thinking cap, because this crime scene is RED HOT! ","Work together with your team to investigate a crime scene and discover the truth behind it all.","You will have to find clues, gather evidence, interrogate both victims and suspects, and slowly piece together who the true culprit is and how they did it. "],"params":["4 players","Approx. 2 hours"]},"02":{"text":["Test your negotiation and marketing skills in this exciting Team VS Team event.","In Round 1, take the role of a company executive and work with your team to pitch your idea to potential clients before the other team does."],"params":["4 players","15 minutes"]},"03":{"text":["Can you turn garbage into gold?","In Round 1, you will have to think outside the box to take a failed product and transform it into one that can stand out and shine in the market","In Round 2, take your pitch to its limits. Conduct research, analyze competitors, and prepare a presentation to promote and sell your given product."],"params":["2 players"]},"04":{"text":["Roll the dice of chance and see what exciting surprise awaits!","Come with a group of friends to play this super fun surprise game But shhhhh… we can’t tell you about it yet… It's a secret!"],"params":[]},"05":{"text":["Prepare yourself to dig deep and think from a whole new perspective!","In round 1, you and your team will have to decipher the hidden problem linked to a picture, and figure out the best solution.","Breathe new life into the brands you know and love!","In round 2,  let your innovative skills shine as you are tasked to rethink and redesign a popular app, from its logo to its features! "],"params":[]}}`;
let interface = new Interface(content);
