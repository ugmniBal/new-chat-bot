
const staticResponses = {
  "질문": "제가 도와드릴 수 있는 질문은 다음과 같아요:\n- 플라스틱\n- 비닐\n- 유리병\n- 스티로폼\n- 일반쓰레기\n- 메뉴\n- 소개\n- AI 인식기\n- 문의",
  "소개": "re:earth는 플라스틱 라벨 제거를 시작으로, 일상 속 작은 실천으로 지구를 보호하는 것을 목표로 한 친환경 플랫폼입니다.",
  "메뉴": "re:earth의 주요 메뉴는 다음과 같아요:\n• 분리배출 가이드\n• AI 인식기\n• 프로젝트 소개\n• 문의하기",
  "AI 인식기": "AI 인식기는 카메라로 쓰레기를 인식해 어떤 분리배출함에 버려야 하는지 안내해주는 기능이에요.",
  "문의": "문의는 contact@reearth.net 으로 메일 보내주세요!",
  "플라스틱": "플라스틱은 깨끗이 씻고 라벨과 뚜껑을 제거한 후 색상별로 분리해 배출해주세요.\n👉 투명 페트병은 별도 분리 수거함에!",
  "비닐": "비닐은 음식물이나 이물질 없이 깨끗한 경우만 재활용이 가능해요.\n※ 오염된 비닐은 일반쓰레기로!",
  "유리병": "유리병은 내용물을 비우고 금속 뚜껑을 제거한 후, 깨지지 않도록 주의해서 배출해주세요.",
  "스티로폼": "스티로폼은 이물질 없이 깨끗한 경우 재활용 가능하며, 오염된 경우 일반쓰레기로 버려야 해요.",
  "일반쓰레기": "재활용이 불가능하거나 오염된 물건은 일반쓰레기 봉투에 담아 배출해야 해요."
};

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  input.value = "";

  let reply = "죄송해요, 그 내용은 아직 학습되지 않았어요.";
  for (let key in staticResponses) {
    if (message.includes(key)) {
      reply = staticResponses[key];
      break;
    }
  }
  appendMessage("bot", reply);
}

function appendMessage(role, text) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = role;
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

window.onload = function() {
  const greeting = "🌍 안녕하세요! 저는 re:earth의 안내 챗봇 REVO입니다.";
  const intro = "re:earth는 '다시 지구를 위한 실천'이라는 철학으로 운영되는 환경 보호 플랫폼이에요.";
  const slogan = "♻️ 슬로건: '작은 실천이 지구를 바꿉니다'";
  const hint = "💡 예시 질문: 플라스틱, 비닐, 메뉴, 소개, AI 인식기, 문의 등 입력해보세요!";

  appendMessage("bot", greeting);
  appendMessage("bot", intro);
  appendMessage("bot", slogan);
  appendMessage("bot", hint);
};
