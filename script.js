
const staticResponses = {
  "질문": "제가 도와드릴 수 있는 질문은 다음과 같아요:\n- 플라스틱\n- 비닐\n- 유리병\n- 스티로폼\n- 일반쓰레기\n- 메뉴\n- 소개\n- AI 인식기\n- 문의",
  "소개": "NOPLL은 플라스틱 라벨 없는 삶을 목표로 하는 환경 정보 플랫폼입니다.",
  "메뉴": "현재 메뉴는 ‘분리배출 가이드’, ‘AI 인식기’, ‘프로젝트 소개’, ‘문의하기’로 구성되어 있어요.",
  "AI 인식기": "AI 인식기는 카메라로 쓰레기를 인식하고 분리배출 방법을 안내해주는 기능이에요.",
  "문의": "문의사항은 contact@nopll.net 으로 메일 주세요!",
  "플라스틱": "플라스틱은 깨끗이 씻고 라벨과 뚜껑을 제거한 후 색상별로 분리해 배출해주세요.\n👉 투명 페트병은 별도 분리 수거!",
  "비닐": "비닐은 이물질 없이 깨끗해야 재활용 가능합니다.\n※ 오염된 비닐은 일반쓰레기로!",
  "유리병": "유리병은 내용물 비우고 뚜껑 제거 후 조심스럽게 유리병 전용함에 버려주세요.",
  "스티로폼": "스티로폼은 깨끗한 경우 재활용, 오염된 경우 일반쓰레기로 배출해요.",
  "일반쓰레기": "재활용이 어렵거나 오염된 쓰레기는 일반쓰레기 봉투에 담아 배출해야 해요."
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
  const greeting = "🌱 안녕하세요! 저는 NOPLL의 안내 챗봇 REVO입니다.";
  const intro = "NOPLL은 'No Plastic Label Life'의 약자로, 플라스틱 라벨 없는 친환경 생활을 지향하는 플랫폼이에요.";
  const slogan = "♻️ 슬로건: '분리배출을 쉽게, 환경보호는 자연스럽게'";
  const hint = "💡 예시 질문: 플라스틱, 비닐, 메뉴, 소개, AI 인식기, 문의 등 입력해보세요!";

  appendMessage("bot", greeting);
  appendMessage("bot", intro);
  appendMessage("bot", slogan);
  appendMessage("bot", hint);
};
