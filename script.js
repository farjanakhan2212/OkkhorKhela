const SWOROBORNO = [
  { letter: "অ", word: "অজু" },
  { letter: "আ", word: "আল্লাহ" },
  { letter: "ই", word: "ইসলাম" },
  { letter: "ঈ", word: "ঈমান" },
  { letter: "উ", word: "উম্মাহ" },
  { letter: "ঊ", word: "ঊষা" },
  { letter: "ঋ", word: "ঋণ" },
  { letter: "এ", word: "এবাদত" },
  { letter: "ঐ", word: "ঐক্য" },
  { letter: "ও", word: "ওযু" },
  { letter: "ঔ", word: "ঔষধ" },
];

const BYONJONBORNO = [
  { letter: "ক", word: "কুরআন" },
  { letter: "খ", word: "খাতাম" },
  { letter: "গ", word: "গোসল" },
  { letter: "ঘ", word: "ঘর" },
  { letter: "ঙ", word: "অঙ্গ" },
  { letter: "চ", word: "চাঁদ" },
  { letter: "ছ", word: "ছওয়াব" },
  { letter: "জ", word: "জান্নাত" },
  { letter: "ঝ", word: "ঝরনা" },
  { letter: "ঞ", word: "জ্ঞান" },
  { letter: "ট", word: "টুপি" },
  { letter: "ঠ", word: "ঠোঁট" },
  { letter: "ড", word: "ডিম" },
  { letter: "ঢ", word: "ঢাকনা" },
  { letter: "ণ", word: "গণনা" },
  { letter: "ত", word: "তাওহীদ" },
  { letter: "থ", word: "থানা" },
  { letter: "দ", word: "দোয়া" },
  { letter: "ধ", word: "ধৈর্য" },
  { letter: "ন", word: "নামাজ" },
  { letter: "প", word: "পর্দা" },
  { letter: "ফ", word: "ফরজ" },
  { letter: "ব", word: "বিসমিল্লাহ" },
  { letter: "ভ", word: "ভালো" },
  { letter: "ম", word: "মসজিদ" },
  { letter: "য", word: "যাকাত" },
  { letter: "র", word: "রোজা" },
  { letter: "ল", word: "লাইলাতুল কদর" },
  { letter: "শ", word: "শবে বরাত" },
  { letter: "ষ", word: "ষড়ঋতু" },
  { letter: "স", word: "সালাত" },
  { letter: "হ", word: "হজ" },
  { letter: "ড়", word: "বড়" },
  { letter: "ঢ়", word: "আষাঢ়" },
  { letter: "য়", word: "মায়া" },
  { letter: "ৎ", word: "সৎ" },
];

const CHINHO = [
  { letter: "ং", word: "রং", say: "রং" },
  { letter: "ঃ", word: "দুঃখ", say: "দুঃখ" },
  { letter: "ঁ", word: "চাঁদ", say: "চাঁদ" },
];

const SOROCHINHO = [
  { base: "ক", sign: "া", result: "কা" },
  { base: "ক", sign: "ি", result: "কি" },
  { base: "ক", sign: "ী", result: "কী" },
  { base: "ক", sign: "ু", result: "কু" },
  { base: "ক", sign: "ূ", result: "কূ" },
  { base: "ক", sign: "ৃ", result: "কৃ" },
  { base: "ক", sign: "ে", result: "কে" },
  { base: "ক", sign: "ৈ", result: "কৈ" },
  { base: "ক", sign: "ো", result: "কো" },
  { base: "ক", sign: "ৌ", result: "কৌ" },
];

const READING_PRACTICE = [
  { letter: "অ", word: "অজু", emoji: "💧" },
  { letter: "আ", word: "আল্লাহ", emoji: "🕌" },
  { letter: "ই", word: "ইসলাম", emoji: "☪️" },
  { letter: "ঈ", word: "ঈমান", emoji: "💖" },
  { letter: "উ", word: "উম্মাহ", emoji: "🤝" },
  { letter: "ঊ", word: "ঊষা", emoji: "🌅" },
  { letter: "ঋ", word: "ঋণ", emoji: "🏦" },
  { letter: "এ", word: "এবাদত", emoji: "🕋" },
  { letter: "ঐ", word: "ঐক্য", emoji: "💪" },
  { letter: "ও", word: "ওযু", emoji: "🚿" },
  { letter: "ঔ", word: "ঔষধ", emoji: "💊" },
  { letter: "ক", word: "কুরআন", emoji: "📖" },
  { letter: "খ", word: "খাতাম", emoji: "📿" },
  { letter: "গ", word: "গোসল", emoji: "🛁" },
  { letter: "ঘ", word: "ঘর", emoji: "🏠" },
  { letter: "ঙ", word: "অঙ্গ", emoji: "🧍" },
  { letter: "চ", word: "চাঁদ", emoji: "🌙" },
  { letter: "ছ", word: "ছওয়াব", emoji: "🌟" },
  { letter: "জ", word: "জান্নাত", emoji: "🌸" },
  { letter: "ঝ", word: "ঝরনা", emoji: "⛲" },
  { letter: "ঞ", word: "জ্ঞান", emoji: "💡" },
  { letter: "ট", word: "টুপি", emoji: "🎩" },
  { letter: "ঠ", word: "ঠোঁট", emoji: "👄" },
  { letter: "ড", word: "ডিম", emoji: "🥚" },
  { letter: "ঢ", word: "ঢাকনা", emoji: "🍲" },
  { letter: "ণ", word: "গণনা", emoji: "🔢" },
  { letter: "ত", word: "তাওহীদ", emoji: "☝️" },
  { letter: "থ", word: "থানা", emoji: "🏢" },
  { letter: "দ", word: "দোয়া", emoji: "🤲" },
  { letter: "ধ", word: "ধৈর্য", emoji: "🐢" },
  { letter: "ন", word: "নামাজ", emoji: "🕌" },
  { letter: "প", word: "পর্দা", emoji: "🚪" },
  { letter: "ফ", word: "ফরজ", emoji: "✔️" },
  { letter: "ব", word: "বিসমিল্লাহ", emoji: "✨" },
  { letter: "ভ", word: "ভালো", emoji: "👍" },
  { letter: "ম", word: "মসজিদ", emoji: "🕌" },
  { letter: "য", word: "যাকাত", emoji: "💰" },
  { letter: "র", word: "রোজা", emoji: "🌙" },
  { letter: "ল", word: "লাইলাতুল কদর", emoji: "✨" },
  { letter: "শ", word: "শবে বরাত", emoji: "🌙" },
  { letter: "ষ", word: "ষড়ঋতু", emoji: "🍃" },
  { letter: "স", word: "সালাত", emoji: "🧎" },
  { letter: "হ", word: "হজ", emoji: "🕋" },
  { letter: "ড়", word: "বড়", emoji: "🐘" },
  { letter: "ঢ়", word: "আষাঢ়", emoji: "☔" },
  { letter: "য়", word: "মায়া", emoji: "💕" },
  { letter: "ৎ", word: "সৎ", emoji: "👍" },
  { letter: "ং", word: "রং", emoji: "🎨" },
  { letter: "ঃ", word: "দুঃখ", emoji: "😢" },
  { letter: "ঁ", word: "চাঁদ", emoji: "🌙" },
];

const COLORS = [
  ["#ff6b6b", "#ee5a24"],
  ["#feca57", "#f39c12"],
  ["#48dbfb", "#0abde3"],
  ["#1dd1a1", "#10ac84"],
  ["#a29bfe", "#6c5ce7"],
  ["#fd79a8", "#e84393"],
  ["#ff9f43", "#ee5253"],
];

function buildCard(item, index) {
  const [bgColor, accentColor] = COLORS[index % COLORS.length];
  const button = document.createElement("button");
  button.className = "letter-card";
  button.style.background = `linear-gradient(135deg, ${bgColor}, ${accentColor})`;
  button.setAttribute("aria-label", `শুনুন ${item.letter}`);

  const letterSpan = document.createElement("span");
  letterSpan.textContent = item.letter;

  const wordSpan = document.createElement("span");
  wordSpan.className = "bangla-word";
  wordSpan.textContent = item.word;

  button.appendChild(letterSpan);
  button.appendChild(wordSpan);
  button.addEventListener("click", () => {
    speak(item.say || item.letter, button);
  });

  return button;
}

function buildVowelSignCard(item, index) {
  const [bgColor, accentColor] = COLORS[index % COLORS.length];
  const button = document.createElement("button");
  button.className = "letter-card vowel-sign-card";
  button.style.background = `linear-gradient(135deg, ${bgColor}, ${accentColor})`;
  button.setAttribute("aria-label", `শুনুন ${item.result}`);

  const resultSpan = document.createElement("span");
  resultSpan.textContent = item.result;

  const signSpan = document.createElement("span");
  signSpan.className = "sign-badge";
  signSpan.textContent = item.sign;

  const formulaSpan = document.createElement("span");
  formulaSpan.className = "bangla-word";
  formulaSpan.textContent = `${item.base} + ${item.sign} = ${item.result}`;

  button.appendChild(resultSpan);
  button.appendChild(signSpan);
  button.appendChild(formulaSpan);
  button.addEventListener("click", () => {
    speak(item.result, button);
  });

  return button;
}

function renderGrid(containerId, letters, builder = buildCard) {
  const container = document.getElementById(containerId);
  letters.forEach((item, index) => {
    container.appendChild(builder(item, index));
  });
}

function pickBengaliVoice() {
  const voices = speechSynthesis.getVoices();
  return (
    voices.find((v) => /bn[-_]BD/i.test(v.lang)) ||
    voices.find((v) => /^bn/i.test(v.lang)) ||
    voices.find((v) => /Bangla|Bengali/i.test(v.name)) ||
    null
  );
}

function speak(text, element) {
  if (!("speechSynthesis" in window)) {
    alert("এই ব্রাউজারে ভয়েস সাপোর্ট নেই!");
    return;
  }

  speechSynthesis.cancel();
  speechSynthesis.resume();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "bn-BD";
  utterance.rate = 0.7;
  utterance.pitch = 1.1;

  const voice = pickBengaliVoice();
  if (voice) {
    utterance.voice = voice;
  }

  if (element) {
    element.classList.remove("pop");
    void element.offsetWidth;
    element.classList.add("pop");
  }

  speechSynthesis.speak(utterance);
}

function initVoiceStatus() {
  const statusEl = document.getElementById("voiceStatus");
  function update() {
    const voice = pickBengaliVoice();
    if (voice) {
      statusEl.textContent = `🔊 শোনা যাচ্ছে: ${voice.name}`;
      statusEl.classList.remove("hidden");
    } else {
      statusEl.classList.add("hidden");
    }
  }
  update();
  speechSynthesis.onvoiceschanged = update;
}

let practiceIndex = 0;

function buildUtterance(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "bn-BD";
  utterance.rate = 0.7;
  utterance.pitch = 1.1;
  const voice = pickBengaliVoice();
  if (voice) {
    utterance.voice = voice;
  }
  return utterance;
}

function speakPractice(item, element) {
  if (!("speechSynthesis" in window)) {
    alert("এই ব্রাউজারে ভয়েস সাপোর্ট নেই!");
    return;
  }

  speechSynthesis.cancel();
  speechSynthesis.resume();
  const letterUtterance = buildUtterance(item.letter);
  letterUtterance.onend = () => speechSynthesis.speak(buildUtterance(item.word));
  speechSynthesis.speak(letterUtterance);

  if (element) {
    element.classList.remove("pop");
    void element.offsetWidth;
    element.classList.add("pop");
  }
}

function renderPractice() {
  const item = READING_PRACTICE[practiceIndex];
  document.getElementById("practiceEmoji").textContent = item.emoji;
  document.getElementById("practiceLetter").textContent = item.letter;
  document.getElementById("practiceWord").textContent = item.word;
  document.getElementById(
    "practiceCounter"
  ).textContent = `${toBengaliNumber(practiceIndex + 1)} / ${toBengaliNumber(READING_PRACTICE.length)}`;

  const card = document.getElementById("practiceCard");
  const [bgColor, accentColor] = COLORS[practiceIndex % COLORS.length];
  card.style.background = `linear-gradient(135deg, ${bgColor}, ${accentColor})`;

  card.classList.remove("pop");
  void card.offsetWidth;
  card.classList.add("pop");
}

function nextPractice() {
  practiceIndex = (practiceIndex + 1) % READING_PRACTICE.length;
  renderPractice();
  autoSpeakPractice();
}

function prevPractice() {
  practiceIndex = (practiceIndex - 1 + READING_PRACTICE.length) % READING_PRACTICE.length;
  renderPractice();
  autoSpeakPractice();
}

function autoSpeakPractice() {
  const card = document.getElementById("practiceCard");
  speakPractice(READING_PRACTICE[practiceIndex], card);
}

function initPractice() {
  renderPractice();
  const card = document.getElementById("practiceCard");
  card.addEventListener("click", () => speakPractice(READING_PRACTICE[practiceIndex], card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      speakPractice(READING_PRACTICE[practiceIndex], card);
    }
  });
  document.getElementById("nextBtn").addEventListener("click", nextPractice);
  document.getElementById("prevBtn").addEventListener("click", prevPractice);
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") nextPractice();
    if (event.key === "ArrowLeft") prevPractice();
  });
}

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 420;

const WRITING_PRACTICE = READING_PRACTICE;

let writingIndex = 0;
let writingStrokes = [];
let writingStroke = null;
let writingDrawing = false;
let writingOnLetter = 0;
let writingGuideData = null;
let writingColorIndex = 0;
let writingComplete = false;
let writeContext = null;

function buildWritingGuide(item) {
  const guide = document.createElement("canvas");
  guide.width = CANVAS_WIDTH;
  guide.height = CANVAS_HEIGHT;
  const gctx = guide.getContext("2d");
  gctx.font =
    "bold 280px 'Hind Siliguri', 'Noto Sans Bengali', 'Nirmala UI', 'SolaimanLipi', sans-serif";
  gctx.textAlign = "center";
  gctx.textBaseline = "middle";
  gctx.fillStyle = "#a5b1c2";
  gctx.fillText(item.letter, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 12);
  writingGuideData = gctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT).data;
  return guide;
}

function isOnGuide(x, y) {
  if (!writingGuideData) return false;
  const px = Math.floor(x);
  const py = Math.floor(y);
  if (px < 0 || py < 0 || px >= CANVAS_WIDTH || py >= CANVAS_HEIGHT) return false;
  return writingGuideData[(py * CANVAS_WIDTH + px) * 4 + 3] > 100;
}

function drawWritingStroke(ctx, stroke) {
  ctx.beginPath();
  stroke.points.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.strokeStyle = stroke.color;
  ctx.lineWidth = 16;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
}

function paintWriting() {
  const ctx = writeContext;
  const guide = buildWritingGuide(WRITING_PRACTICE[writingIndex]);
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.fillStyle = "#fffdf5";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.strokeStyle = "#cde7ff";
  ctx.lineWidth = 2;
  for (let y = 90; y < CANVAS_HEIGHT; y += 60) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(CANVAS_WIDTH, y);
    ctx.stroke();
  }

  ctx.strokeStyle = "#ffc4c4";
  ctx.beginPath();
  ctx.moveTo(48, 0);
  ctx.lineTo(48, CANVAS_HEIGHT);
  ctx.stroke();

  ctx.globalAlpha = 0.55;
  ctx.drawImage(guide, 0, 0);
  ctx.globalAlpha = 1;

  writingStrokes.forEach((stroke) => drawWritingStroke(ctx, stroke));
}

function renderWritingLabel() {
  const item = WRITING_PRACTICE[writingIndex];
  document.getElementById(
    "writingLabel"
  ).textContent = `✏️ ${item.letter} — ${item.word}`;
}

function completeWriting() {
  writingComplete = true;
  const item = WRITING_PRACTICE[writingIndex];
  const msg = document.getElementById("writingSuccess");
  msg.textContent = `চমৎকার! ${item.emoji}`;
  msg.classList.remove("hidden");
  msg.classList.remove("pop");
  void msg.offsetWidth;
  msg.classList.add("pop");
  speakPractice(item, null);
}

function resetWriting() {
  writingStrokes = [];
  writingOnLetter = 0;
  writingComplete = false;
  document.getElementById("writingSuccess").classList.add("hidden");
  paintWriting();
}

function renderWritingPage() {
  renderWritingLabel();
  resetWriting();
}

function flipWritingPage(apply) {
  const box = document.getElementById("writingBox");
  if (!box) {
    apply();
    return;
  }
  box.classList.remove("flip-in");
  box.classList.add("flip-out");
  setTimeout(() => {
    apply();
    box.classList.remove("flip-out");
    void box.offsetWidth;
    box.classList.add("flip-in");
  }, 230);
}

function nextWriting() {
  flipWritingPage(() => {
    writingIndex = (writingIndex + 1) % WRITING_PRACTICE.length;
    renderWritingPage();
  });
}

function prevWriting() {
  flipWritingPage(() => {
    writingIndex =
      (writingIndex - 1 + WRITING_PRACTICE.length) % WRITING_PRACTICE.length;
    renderWritingPage();
  });
}

function initWriting() {
  const canvas = document.getElementById("writeCanvas");
  writeContext = canvas.getContext("2d");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  function posFromEvent(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * CANVAS_WIDTH,
      y: ((event.clientY - rect.top) / rect.height) * CANVAS_HEIGHT,
    };
  }

  canvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    writingDrawing = true;
    const color = COLORS[writingColorIndex % COLORS.length][0];
    writingColorIndex++;
    writingStroke = { points: [posFromEvent(event)], color };
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!writingDrawing || !writingStroke) return;
    const point = posFromEvent(event);
    writingStroke.points.push(point);
    drawWritingStroke(writeContext, writingStroke);
    if (isOnGuide(point.x, point.y)) {
      writingOnLetter++;
      if (
        !writingComplete &&
        writingOnLetter >= 40 &&
        writingStrokes.length + 1 >= 2
      ) {
        completeWriting();
      }
    }
  });

  canvas.addEventListener("pointerup", () => {
    if (!writingDrawing) return;
    writingDrawing = false;
    if (writingStroke) {
      writingStrokes.push(writingStroke);
      writingStroke = null;
    }
  });

  canvas.addEventListener("pointercancel", () => {
    writingDrawing = false;
    if (writingStroke) {
      writingStrokes.push(writingStroke);
      writingStroke = null;
    }
  });

  document.getElementById("clearBtn").addEventListener("click", resetWriting);
  document.getElementById("retryBtn").addEventListener("click", resetWriting);
  document.getElementById("writeNextBtn").addEventListener("click", nextWriting);
  document.getElementById("writePrevBtn").addEventListener("click", prevWriting);

  renderWritingLabel();
  paintWriting();
}

const QUIZ_TOTAL = 10;

let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizAdvanceTimer = null;

function shuffleArray(items) {
  const arr = items.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function quizDistractors(pool, correct, count) {
  return shuffleArray(pool.filter((item) => item !== correct)).slice(0, count);
}

function itemStartsWord(item) {
  return item.word[0] === item.letter;
}

function buildLetterQuestion() {
  const item =
    READING_PRACTICE[Math.floor(Math.random() * READING_PRACTICE.length)];
  const letterPool = READING_PRACTICE.map((i) => i.letter);
  const contains = !itemStartsWord(item);
  const safeDistractors = letterPool.filter(
    (letter) =>
      letter !== item.letter &&
      (contains ? !item.word.includes(letter) : !item.word.startsWith(letter))
  );
  return {
    question: contains
      ? "কোন অক্ষরটা এই শব্দের মধ্যে আছে?"
      : "কোন অক্ষর দিয়ে শব্দটা শুরু হয়?",
    prompt: item.word,
    answer: item.letter,
    options: shuffleArray(
      shuffleArray(safeDistractors).slice(0, 3).concat(item.letter)
    ),
  };
}

function buildSignQuestion() {
  const item = SOROCHINHO[Math.floor(Math.random() * SOROCHINHO.length)];
  const resultPool = SOROCHINHO.map((i) => i.result);
  return {
    question: "স্বরচিহ্নটা পড়ো:",
    prompt: `${item.base} + ${item.sign} = ?`,
    answer: item.result,
    options: shuffleArray(
      quizDistractors(resultPool, item.result, 3).concat(item.result)
    ),
  };
}

function buildWordQuestion() {
  const item =
    READING_PRACTICE[Math.floor(Math.random() * READING_PRACTICE.length)];
  const wordPool = [...new Set(READING_PRACTICE.map((i) => i.word))];
  const contains = !itemStartsWord(item);
  const safeDistractors = wordPool.filter(
    (word) =>
      word !== item.word &&
      (contains ? !word.includes(item.letter) : !word.startsWith(item.letter))
  );
  return {
    question: contains
      ? "নিচের কোন শব্দে এই অক্ষরটা আছে?"
      : "নিচের কোন শব্দটা এই অক্ষর দিয়ে শুরু হয়?",
    prompt: item.letter,
    answer: item.word,
    options: shuffleArray(
      shuffleArray(safeDistractors).slice(0, 3).concat(item.word)
    ),
  };
}

function generateQuiz() {
  const questions = [];
  for (let i = 0; i < 4; i++) questions.push(buildLetterQuestion());
  for (let i = 0; i < 3; i++) questions.push(buildSignQuestion());
  for (let i = 0; i < 3; i++) questions.push(buildWordQuestion());
  quizQuestions = shuffleArray(questions).slice(0, QUIZ_TOTAL);
}

function renderQuizQuestion() {
  quizAnswered = false;
  const q = quizQuestions[quizIndex];
  document.getElementById(
    "quizProgress"
  ).textContent = `প্রশ্ন ${toBengaliNumber(quizIndex + 1)} / ${toBengaliNumber(quizQuestions.length)}`;
  document.getElementById("quizScore").textContent = `⭐ ${quizScore}`;
  document.getElementById("quizQuestion").textContent = q.question;
  document.getElementById("quizPrompt").textContent = q.prompt;

  const feedback = document.getElementById("quizFeedback");
  feedback.textContent = "";
  feedback.className = "quiz-feedback";

  const optionsBox = document.getElementById("quizOptions");
  optionsBox.innerHTML = "";
  q.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerQuiz(option, button));
    optionsBox.appendChild(button);
  });
}

function answerQuiz(selected, button) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = quizQuestions[quizIndex];
  const buttons = [...document.getElementById("quizOptions").children];
  const feedback = document.getElementById("quizFeedback");
  buttons.forEach((b) => (b.disabled = true));

  if (selected === q.answer) {
    button.classList.add("correct");
    quizScore++;
    feedback.textContent = "সঠিক! 🎉";
    feedback.classList.add("quiz-feedback-correct");
  } else {
    button.classList.add("wrong");
    const correctButton = buttons.find((b) => b.textContent === q.answer);
    if (correctButton) correctButton.classList.add("correct");
    feedback.textContent = `ভুল! 😊 সঠিকটা হলো: ${q.answer}`;
    feedback.classList.add("quiz-feedback-wrong");
  }

  document.getElementById("quizScore").textContent = `⭐ ${quizScore}`;
  speak(q.answer);
  quizAdvanceTimer = setTimeout(nextQuizQuestion, 2200);
}

function nextQuizQuestion() {
  clearTimeout(quizAdvanceTimer);
  quizIndex++;
  if (quizIndex >= quizQuestions.length) {
    showQuizResult();
  } else {
    renderQuizQuestion();
  }
}

function showQuizResult() {
  const total = quizQuestions.length;
  const ratio = quizScore / total;
  const stars = ratio >= 1 ? 3 : ratio >= 0.7 ? 2 : ratio >= 0.4 ? 1 : 0;
  const praise =
    quizScore === total
      ? "দুর্দান্ত! সব সঠিক!"
      : quizScore >= total * 0.7
        ? "চমৎকার! 🎉"
        : quizScore >= total * 0.4
          ? "ভালো হয়েছে! 💪"
          : "আবার চেষ্টা করো! 😊";

  document.getElementById("quizGame").classList.add("hidden");
  document.getElementById(
    "quizStars"
  ).textContent = "⭐".repeat(stars) + "☆".repeat(3 - stars);
  document.getElementById(
    "quizFinalScore"
  ).textContent = `${praise} স্কোর: ${quizScore} / ${total}`;
  document.getElementById("quizResult").classList.remove("hidden");
}

function startQuiz() {
  generateQuiz();
  quizIndex = 0;
  quizScore = 0;
  clearTimeout(quizAdvanceTimer);
  document.getElementById("quizStart").classList.add("hidden");
  document.getElementById("quizResult").classList.add("hidden");
  document.getElementById("quizGame").classList.remove("hidden");
  renderQuizQuestion();
}

function initQuiz() {
  document.getElementById("quizStartBtn").addEventListener("click", startQuiz);
  document.getElementById("quizRetryBtn").addEventListener("click", startQuiz);
}

const BENGALI_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

function toBengaliNumber(value) {
  return String(value)
    .split("")
    .map((ch) => (/\d/.test(ch) ? BENGALI_DIGITS[+ch] : ch))
    .join("");
}

let bookPageIndex = 0;
let bookPages = [];

function updateBookNav() {
  document.getElementById(
    "bookCounter"
  ).textContent = `${toBengaliNumber(bookPageIndex + 1)} / ${toBengaliNumber(bookPages.length)}`;
  const dots = [...document.getElementById("bookDots").children];
  dots.forEach((dot, i) =>
    dot.classList.toggle("book-dot-active", i === bookPageIndex)
  );
}

function goToBookPage(index) {
  const total = bookPages.length;
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;
  if (index === bookPageIndex) return;

  const current = bookPages[bookPageIndex];
  const next = bookPages[index];

  current.classList.add("flip-out");
  setTimeout(() => {
    current.classList.add("hidden");
    current.classList.remove("flip-out");
    next.classList.remove("hidden");
    void next.offsetWidth;
    next.classList.add("flip-in");
    bookPageIndex = index;
    updateBookNav();
  }, 220);
}

function initBook() {
  bookPages = [
    ...document.getElementById("book").querySelectorAll(".book-page"),
  ];
  const dotsBox = document.getElementById("bookDots");
  bookPages.forEach((page, index) => {
    page.classList.add("hidden");
    const title = page.querySelector(".section-title");
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "book-dot";
    dot.title = title ? title.textContent : `পাতা ${index + 1}`;
    dot.setAttribute("aria-label", dot.title);
    dot.addEventListener("click", () => goToBookPage(index));
    dotsBox.appendChild(dot);
  });
  bookPageIndex = 0;
  bookPages[0].classList.remove("hidden");
  updateBookNav();
  document
    .getElementById("bookPrevBtn")
    .addEventListener("click", () => goToBookPage(bookPageIndex - 1));
  document
    .getElementById("bookNextBtn")
    .addEventListener("click", () => goToBookPage(bookPageIndex + 1));
}

renderGrid("sworoborno", SWOROBORNO);
renderGrid("byonjonborno", BYONJONBORNO);
renderGrid("chinho", CHINHO);
renderGrid("sorochinho", SOROCHINHO, buildVowelSignCard);
initVoiceStatus();
initPractice();
initWriting();
initQuiz();
initBook();
