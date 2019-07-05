const aboutmeApp = new Vue({
    el: ".aboutmeContent",
    data: {
        currWord: "",
        currBlurb: "",
        allText: [
            {
                preview: "Front-End",
                html: "<div class='wordBox crown'><div class='rightTriangle triL'><div class='crownTop'></div></div><div class='rightTriangle triR'><div class='crownTop'></div></div><div class='triCenter'><div class='crownTop'></div></div><div class='preview'>FE Web</div></div>",
                word: "Front-End Web Developer",
                blurb: "I aspire to become a front-end web developer with a keen sense for UI/UX design. I love exploring eye-catching web color schemes and user engaging websites.",
                current: false
            },
            {
                preview: "TCK",
                html: "<div class='wordBox diamond'><div class='cut-diamond'></div><div class='preview'>TCK</div></div>",
                word: "Third Culture Kid",
                blurb: "Korea will always be my motherland, but I equally value the American, German, and Malaysian aspects of my cultural background. Growing up in different countries has made my capabilities and character so much more unique and dynamic!",
                current: false
            },
            {
                preview: "5 Words",
                html: "<div class='wordBox sword'><div class='pentagon'><div class='recHor'></div><div class='recVer'></div></div><div class='preview'>5 Words</div></div>",
                word: "5 Words that Describe Me",
                blurb: "Honest. Precise. Approachable. Practical. Systematic.",
                current: false
            },
            {
                preview: "ESTJ",
                html: "<div class='wordBox starwand'><div class='starshape'><div class='wand'></div></div><div class='preview'>ESTJ</div></div>",
                word: "ESTJ (MBTI personality)",
                blurb: '“Loyal, Patient and Reliable – Executives work to exemplify truthfulness and reliability, considering stability and security very important. When Executives say they’ll do something, they keep their word, making them very responsible members of their families, companies and communities.”',
                current: false
            },
            {
                preview: "Motto",
                html: "<div class='wordBox banner'><div class='flag'><div class='flaghanger'></div></div><div class='preview'>Motto</div></div>",
                word: 'Everything happens for a reason.',
                blurb: 'Here’s a life motto that keeps me going whenever I come across hardship. What has already happened cannot be undone or forgotten, so just try to make the most out of the experience and move on. I do my best to stay optimistic and focus on the bright side :D',
                current: false
            },
            {
                preview: "SS",
                html: "<div class='wordBox scroll'><div class='cylinder'><div class='strap'></div></div><div class='preview'>SS</div></div>",
                word: 'Social Sciences',
                blurb: 'My academic background was originally in the social sciences, with a B.A in International Relations and Communication. Although I’m now pursuing a career in the IT sector, my two majors still greatly contribute to how I interpret the world around me.',
                current: false
            }
        ],

    },
    methods: {
        setCurrent(text) {
            this.currWord = text.word;
            this.currBlurb = text.blurb;
            this.allText.forEach(t => {
                t.current = false;
            });
            text.current = true;
        }
    }
});