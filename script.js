// Science Fair Questions about Dairy Products and Glucose Concentration
const questions = [
    {
        number: 1,
        title: "What is Lactose?",
        question: "What does it mean that lactose is a disaccharide, and what two monosaccharides make it up?",
        answer: "Disaccharide means 'two sugars' - it's a molecule made of two simple sugars bonded together. Lactose is composed of glucose and galactose joined by a glycosidic bond. When lactase breaks this bond, we get glucose (which we can measure with strips)."
    },
    {
        number: 2,
        title: "Glucose and Galactose",
        question: "Why do we only measure glucose with test strips when both glucose AND galactose are produced from lactose?",
        answer: "Glucose test strips specifically detect glucose molecules, so they show the glucose concentration. While galactose is also produced, we focus on measuring glucose because it's the primary indicator of lactose breakdown. Our glucose strips change color based on glucose levels."
    },
    {
        number: 3,
        title: "Glycosidic Bonds",
        question: "What are glycosidic bonds and why does lactase need to break them?",
        answer: "Glycosidic bonds are the chemical connections joining glucose and galactose in lactose. Lactase breaks these bonds through hydrolysis, splitting the disaccharide into its two monosaccharide components. This is why we see increased glucose concentration after adding lactase."
    },
    {
        number: 4,
        title: "What Are Enzymes?",
        question: "How would you define an enzyme and what is its role in this experiment?",
        answer: "Enzymes are biological catalysts - they speed up chemical reactions without being consumed themselves. In our experiment, lactase is the enzyme that catalyzes (speeds up) the breakdown of lactose into glucose and galactose. Without lactase, this reaction would happen much more slowly."
    },
    {
        number: 5,
        title: "Enzyme as Catalyst",
        question: "What makes an enzyme different from just speeding up a reaction with heat or acid?",
        answer: "Enzymes are biological catalysts that work at body temperature and neutral pH, making them precise and efficient. They bind to specific molecules (lactose), facilitate the reaction, and then release unchanged - so they can be reused repeatedly. Heat or acid would denature the enzyme and damage the dairy product."
    },
    {
        number: 6,
        title: "Hydrolysis Reaction",
        question: "What is hydrolysis and how does it relate to the lactase enzyme breaking down lactose?",
        answer: "Hydrolysis means 'breaking with water' - it's when water molecules are used to break chemical bonds. When lactase catalyzes hydrolysis, it breaks the glycosidic bond in lactose using water, producing glucose + galactose. This is why lactase is called a hydrolase enzyme."
    },
    {
        number: 7,
        title: "Glucose Test Strips",
        question: "How do glucose test strips work and why do they change color?",
        answer: "Glucose strips contain enzymes and chemical indicators that react with glucose molecules. The more glucose present, the more intense the color change. We compare the color to a chart that indicates glucose concentration in mg/dL. The color intensity directly correlates to glucose amount."
    },
    {
        number: 8,
        title: "Reading Glucose Strips",
        question: "We used Accu-chek glucose monitors - why is standardizing the way we read the strips important?",
        answer: "To make our results consistent and comparable, we need to read each strip the same way and at the same time. Different lighting, timing, or techniques could give different readings for the same sample. Standardizing our method ensures our data is reliable and the experiment is reproducible."
    },
    {
        number: 9,
        title: "Milk Lactose Content",
        question: "How much lactose does milk naturally contain, and why is this significant for our experiment?",
        answer: "Milk contains approximately 4.8% lactose - the highest among the three dairy products we tested. This means milk has the most lactose available for lactase to break down, so it should produce the highest glucose concentration. This is our biggest expected glucose increase."
    },
    {
        number: 10,
        title: "Yogurt Lactose Content",
        question: "Why does yogurt contain less lactose than milk, even though they're both made from milk?",
        answer: "During yogurt fermentation, bacteria such as Lactobacillus incompletely digest lactose, breaking some of it down before we even add lactase. This means yogurt starts with lower lactose content than milk. When we add lactase, it works on the remaining lactose, producing moderate glucose levels."
    },
    {
        number: 11,
        title: "Cheese Lactose Content",
        question: "Why does cheese contain very little lactose (less than 1%) compared to milk (4.8%)?",
        answer: "During cheese-making, most lactose is removed when whey (the liquid) is separated from the curds (solids). Lactose remains primarily in the whey, so aged cheese has very little lactose. This means lactase has minimal lactose to break down in cheese, producing the lowest glucose concentration."
    },
    {
        number: 12,
        title: "Research Question",
        question: "What is our research question and why is it important?",
        answer: "Our research question is: 'To what extent does increasing the lactose in different dairy products (milk, yogurt, cheese) affect the amount of glucose produced?' This question focuses on the relationship between initial lactose content and the glucose produced when lactase is added."
    },
    {
        number: 13,
        title: "Null Hypothesis",
        question: "What is our null hypothesis and what would it mean if it were true?",
        answer: "Our null hypothesis states: 'There will be no difference in the amount of glucose produced when lactase is added to milk, yogurt, and cheese.' If true, this would mean lactose content doesn't affect glucose production - an unexpected finding that would challenge our understanding!"
    },
    {
        number: 14,
        title: "Alternative Hypothesis",
        question: "What is our alternative (experimental) hypothesis and why is it more likely?",
        answer: "Our alternative hypothesis: 'Milk will produce the highest glucose concentration, yogurt moderate, and cheese the lowest when lactase is added.' This is more likely because milk has the most lactose (4.8%), yogurt less (from bacterial fermentation), and cheese very little (from whey separation). More initial lactose = more glucose produced."
    },
    {
        number: 15,
        title: "Scientific Reasoning",
        question: "What is the scientific reasoning behind our experimental hypothesis?",
        answer: "Milk contains highest lactose (4.8%), yogurt contains less due to bacterial fermentation, and cheese contains very little because lactose is mostly removed during production. Since lactase breaks down lactose to produce glucose, products with higher initial lactose levels will produce more glucose."
    },
    {
        number: 16,
        title: "Independent Variable",
        question: "What is the independent variable in our experiment and how do we change it?",
        answer: "The independent variable is the TYPE of dairy product (milk, yogurt, or cheese). This is what we deliberately change to observe its effect. We test three different types while keeping everything else constant - this is what makes it the independent (input) variable."
    },
    {
        number: 17,
        title: "Dependent Variable",
        question: "What is the dependent variable we're measuring and how do we measure it?",
        answer: "The dependent variable is the AMOUNT OF GLUCOSE (concentration in mg/dL) produced after lactase is added. We measure it using glucose test strips and the Accu-chek monitor, which show glucose concentration. This is what 'depends on' the type of dairy product we use."
    },
    {
        number: 18,
        title: "Controlling Temperature",
        question: "Why is temperature a critical variable to control, and how do we control it?",
        answer: "Temperature affects enzyme activity - enzymes work faster at optimal temperatures and slower when cold. We measure and maintain constant temperature using a thermometer, keeping all samples at the same temperature throughout the reaction. This ensures differences in glucose are from lactose content, not temperature."
    },
    {
        number: 19,
        title: "Controlling Lactase Amount",
        question: "Why must we add the same amount of lactase to each sample?",
        answer: "Different amounts of enzyme produce different reaction speeds. If we added more lactase to one sample, it would break down lactose faster and produce more glucose - making our results invalid. We control this by measuring and adding the same volume or number of drops to each sample."
    },
    {
        number: 20,
        title: "Controlling Time",
        question: "Why is controlling reaction time so important, and how do we do it?",
        answer: "The longer lactase has to work, the more lactose it breaks down and the higher glucose concentration becomes. If we measured samples at different times, we couldn't compare results fairly. We use a stopwatch to allow the same reaction time (10 minutes) for all samples."
    },
    {
        number: 21,
        title: "Controlling Sample Volume",
        question: "Why do we measure exactly 20 mL of each dairy product?",
        answer: "Different volumes of dairy product would contain different amounts of lactose:  20 mL of milk has more lactose than 20 mL of cheese. By using equal volumes (20 mL), we ensure that differences in glucose production come from lactose concentration differences, not from different amounts of product."
    },
    {
        number: 22,
        title: "Materials: Lactase",
        question: "What form of lactase did we use and why does the method of addition matter?",
        answer: "We used lactase drops and added them the same way to each sample (two drops per sample). We could also use lactase powder measured by mass or volume. The key is being consistent - adding the same amount of enzyme the same way ensures fair comparison and reduces experimental error."
    },
    {
        number: 23,
        title: "Materials: Sample Size",
        question: "We measured exactly 20 mL of milk, yogurt, and cheese. Why not use different volumes for each?",
        answer: "Using the same volume (20 mL) for all dairy products keeps the experiment fair. It's a controlled variable. If we used 20 mL of milk but 30 mL of yogurt, we couldn't tell if differences were from lactose content or sample volume. Equal volumes = better data."
    },
    {
        number: 24,
        title: "Methodological Step: Crushing Cheese",
        question: "Why did we crush the cheese before adding lactase instead of leaving it as a solid chunk?",
        answer: "Crushing increases surface area, allowing lactase enzyme better access to the lactose in the cheese. More surface area = faster reaction. If we used a solid chunk, the enzyme would only work on the outside, and the reaction would be slow, giving us inaccurate results."
    },
    {
        number: 25,
        title: "Stirring Uniformly",
        question: "Why is gently stirring each sample important after adding lactase?",
        answer: "Stirring ensures the enzyme mixes evenly throughout the sample. If we don't stir, lactase will only react in one spot, and we won't get complete breakdown of lactose. Uniform mixing guarantees that all the lactose has equal opportunity to meet the enzyme molecules."
    },
    {
        number: 26,
        title: "Waiting 10 Minutes",
        question: "What happens during the 10-minute waiting period after adding lactase?",
        answer: "During these 10 minutes, the lactase enzyme catalyzes the hydrolysis of lactose into glucose and galactose. The reaction happens gradually - more time = more lactose broken down. By waiting 10 minutes before measuring, we allow sufficient time for the reaction to reach a measurable level in all samples."
    },
    {
        number: 27,
        title: "Why Repeat Three Times",
        question: "Why is it important to repeat the experiment three times for each dairy product?",
        answer: "Repeating experiments (getting 3 trials) helps identify reliable patterns and reduces the impact of random errors. If one trial gives an odd result, we can see if the other two trials confirm the pattern. Three trials allow us to calculate averages and show our results are repeatable and valid."
    },
    {
        number: 28,
        title: "Expected Glucose Pattern",
        question: "Based on lactose percentages (milk 4.8%, yogurt less, cheese <1%), what glucose pattern do we predict?",
        answer: "We predict: Milk sample will show the highest glucose reading (most lactose to break down), yogurt will show a moderate reading (some lactose already broken down by bacteria), and cheese will show the lowest reading (very little lactose remains). This hierarchy should hold across all three trials."
    },
    {
        number: 29,
        title: "What If Cheese Showed High Glucose?",
        question: "If cheese unexpectedly showed high glucose concentration equal to milk, what might this mean?",
        answer: "This would be surprising and worth investigating! Possible explanations: (1) Our cheese sample contains more lactose than expected, (2) The whey wasn't fully separated during cheese-making, (3) We made an error in our procedure, or (4) This particular cheese has unusual lactose content. We'd need to repeat and investigate!"
    },
    {
        number: 30,
        title: "The Big Picture",
        question: "How does understanding this experiment help us understand digestion and lactose intolerance?",
        answer: "Our experiment demonstrates that lactase breaks lactose into absorbable sugars (glucose and galactose). People with lactose intolerance lack sufficient lactase enzyme, so they can't break down lactose properly - it causes discomfort. Understanding this helps explain why lactase supplements or lactose-free products help people with intolerance eat dairy!"
    }
];

let deck = [];
let currentQuestion = null;
let revealedCards = new Set();

// Initialize the game
function initGame() {
    deck = [...questions];
    currentQuestion = null;
    revealedCards.clear();
    renderDeck();
    updateStats();
    clearDisplay();
}

// Shuffle the deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    renderDeck();
}

// Render cards in the deck
function renderDeck() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    
    deck.forEach((question, index) => {
        const card = document.createElement('div');
        card.className = `card ${revealedCards.has(question.number) ? 'used' : ''}`;
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-front">?</div>
                <div class="card-face card-back">${question.number}</div>
            </div>
        `;
        
        card.addEventListener('click', () => revealCard(question, card, index));
        container.appendChild(card);
    });
}

// Reveal a card and show question
function revealCard(question, cardElement, index) {
    if (revealedCards.has(question.number)) return;
    
    // Flip animation
    cardElement.classList.add('flipped');
    cardElement.classList.add('used');
    revealedCards.add(question.number);
    
    // Display question
    displayQuestion(question);
    
    // Update stats
    updateStats();
}

// Display question in the question display area
function displayQuestion(question) {
    const display = document.getElementById('questionDisplay');
    
    display.innerHTML = `
        <div class="question-content">
            <h3>🔬 Question ${question.number}: ${question.title}</h3>
            <p><strong>❓ ${question.question}</strong></p>
            <div class="hints">
                <strong>💡 Answer:</strong> ${question.answer}
            </div>
        </div>
    `;
    
    currentQuestion = question;
}

// Clear the display
function clearDisplay() {
    const display = document.getElementById('questionDisplay');
    display.innerHTML = `
        <div class="question-placeholder">
            <p>Click on a card to reveal a question!</p>
        </div>
    `;
}

// Update statistics
function updateStats() {
    document.getElementById('cardsRevealed').textContent = revealedCards.size;
    document.getElementById('totalCards').textContent = questions.length;
    document.getElementById('score').textContent = Math.round((revealedCards.size / questions.length) * 100);
}

// Reset the game
function resetGame() {
    initGame();
    clearDisplay();
}

// Start the game when page loads
window.addEventListener('load', initGame);
