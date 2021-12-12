class Interface {
    constructor(eventContent) {
        this.eventContent = JSON.parse(eventContent);
        // this.createCountdown();
        this.createSchedule();
        this.simulateClick();
        this.highlightFaqs();
        this.hybrid();
        // this.fav = document.getElementById("fav");
        // setInterval(this.favicon, 100);
    }
    hybrid() {
        let asterisk = document.getElementById("asterisk");
        let hybridFaq = document.getElementById("ecf-hyb");
        asterisk.addEventListener("click", () => {
            if (!hybridFaq.classList.contains("faq-focus")) {
                hybridFaq.click();
            }
        });
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
                let faq = document.getElementById(e.target.id);
                faq.classList.toggle("faq-focus");
            });
        }
    }
    simulateClick() {
        document.getElementById("a02").click();
        document.getElementById("b11").click();
        document.getElementById("c21").click();
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
    updateButton(targetId) {
        for (let i = 0; i < this.eventLinks.length; i++) {
            if (this.eventLinks[i].id.startsWith(targetId[0])) {
                this.eventLinks[i].classList.remove("active-event");
            }
        }
        let focusElement = document.getElementById(targetId);
        focusElement.classList.add("active-event");
    }
    updateFrame(frameId, eventId) {
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
    clearFrame(frameId) {
        while (this.eventFrames[frameId].firstChild) {
            this.eventFrames[frameId].removeChild(this.eventFrames[frameId].firstChild);
        }
    }
    createCountdown() {
        let cd = document.getElementById("hero-right-mid");
        let festStart = new Date("12/13/2021");
        let dateNow = new Date();
        let timeLeft = festStart.getTime() - dateNow.getTime();
        let days = Math.ceil(timeLeft / (1000 * 3600 * 24));
        cd.innerHTML = `${days}`;
    }
}
// https://jsontostring.com/
let content = '{"11":{"name":"ShowBiz! Pt.2","text":["Work with your team to pitch your idea to potential investors. But be careful, the investors may try to bluff and confuse you, so stay on your toes!"],"params":["10AM – 5AM","B – 215, 216"]},"12":{"name":"Operation Redo Pt.2","text":["Take your pitch to its limits. Conduct research, analyze competitors, and prepare a presentation to promote and sell your given product."],"params":["10AM – 5AM","B – 007, 008"]},"13":{"name":"Pic-It-Up Pt.2","text":["Let your innovative skills shine as you are tasked to rethink and redesign a popular app, from its logo to its features!"],"params":["10AM – 5AM","C – 305, 306"]},"14":{"name":"Tinkerers Challenge Pt.2","text":["Put your internet and network etiquette to the test!","You’ll have to choose between two similar products to decide which can be considered “IP Right” and free against any potential violations"],"params":["10AM – 5AM","C – 201, 202"]},"15":{"name":"Squid Game Pt.2","text":["An Entrepreneurial twist on the latest hit series!"],"params":["10AM – 5AM","Sinti Stage"]},"16":{"name":"Cypher Pt.2","text":["In the world of business, what are you willing to sacrifice?","You’ll have to make strong decisions in order to make the best of the given scenario, each with its own strengths and weaknesses."],"params":["10AM – 5AM","A – 109, 110, 118"]},"21":{"name":"Start-Up Idea ","text":["This competition gives you a platform to get your intriguing start-up ideas (in regard to the given theme) validated, guided and incubated."],"params":["13 Dec","2:30 – 4:00PM","B – 306"]},"22":{"name":"Parishkaar","text":["From the listed domains, a problem statement should be chosen. With a little imagination and the correct tools, you might be able to come up with a creative solution that makes the world a better place!"],"params":["14 Dec","2:30 – 4:00PM","B – 312"]},"23":{"name":"Ghar aaja Pardesi","text":["Discover if you can use your creativity to scale an existing business idea to meet the needs of your target market.","For a foreign startup, your team has to come up with a plan to adapt it to our geographical location."],"params":["14 Dec","2:30 – 4:00PM","B – 307"]},"02":{"name":"ShowBiz! Pt.1","text":["Test your negotiation and marketing skills in this exciting Team VS Team event.","Take the role of a company executive and work with your team to pitch your idea to potential clients before the other team does."],"params":["10AM – 5AM","B – 215, 216"]},"03":{"name":"Operation Redo Pt.1","text":["Can you turn garbage into gold?","You will have to think outside the box to take a failed product and transform it into one that can stand out and shine in the market"],"params":["10AM – 5AM","B – 007, 008"]},"04":{"name":"Pic-It-Up Pt.1","text":["Prepare yourself to dig deep and think from a whole new perspective!","You and your team will have to decipher the hidden problem linked to a picture, and figure out the best solution."],"params":["10AM – 5AM","C – 305, 306"]},"05":{"name":"Tinkerers Challenge Pt.1","text":["Challenge your ethical thinking in this tricky test of empathy.","You and your partner will be tasked to find the ethically sound solutions to real world problems and situations "],"params":["10AM – 5AM","C – 201, 202"]},"06":{"name":"Squid Game Pt.1","text":["Flex your brain-muscles in this test of memory and wits!","You’ll have to juggle answering questions with remembering select keywords which build up as time goes on!"],"params":["10AM – 5AM","Sinti Stage"]},"07":{"name":"Cypher Pt.1","text":["How much can you answer before time runs out?","Play in a live quiz and answer questions about aptitude, case studies, entrepreneurship, psychometrics and much more!"],"params":["10AM – 5AM","A – 109, 110, 118"]}}';
let interface = new Interface(content);
