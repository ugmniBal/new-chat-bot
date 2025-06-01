const staticResponses = {"소개": "NOPLL은 플라스틱 라벨 제거를 중심으로 한 친환경 플랫폼입니다. 환경 보호를 위한 정보를 제공합니다.", "메뉴": "현재 메뉴는 ‘분리배출 가이드’, ‘AI 인식기’, ‘프로젝트 소개’, ‘문의하기’로 구성되어 있습니다.", "AI 인식기": "AI 인식기는 카메라를 통해 쓰레기를 인식하고 올바른 분리배출 방법을 알려주는 기능입니다.", "문의": "문의사항은 contact@nopll.net 으로 이메일을 보내주세요.", "플라스틱": "플라스틱은 깨끗이 씻고 라벨을 제거한 후 플라스틱 전용함에 버려주세요.", "비닐": "비닐류는 음식물이나 이물질을 제거하고 비닐 전용 수거함에 버려주세요.", "종이": "종이는 젖지 않도록 하고 이물질을 제거한 후 종이류로 배출하세요.", "캔": "캔은 내용물을 비우고 압착하여 캔류 전용함에 배출합니다.", "유리병": "유리병은 깨끗이 씻고 뚜껑을 제거한 후 유리병 전용함에 배출하세요.", "일반쓰레기": "재활용이 불가능한 폐기물은 일반쓰레기 봉투에 넣어 배출해야 합니다.", "스티로폼": "스티로폼은 부피를 줄여 배출하고 음식물이 묻었다면 일반쓰레기로 버려야 해요.", "라벨": "플라스틱 제품의 라벨은 재활용을 방해하므로 반드시 제거하고 버려주세요.", "분리배출": "분리배출 가이드를 통해 다양한 품목의 올바른 배출 방법을 확인해보세요.", "NOPLL": "NOPLL은 No Plastic Label Life의 줄임말로, 라벨 없는 친환경 생활을 지향합니다.", "운영시간": "NOPLL 웹사이트는 24시간 언제든지 이용할 수 있습니다.", "누가 만들었어": "NOPLL은 환경에 관심 있는 청소년 개발자 팀이 제작한 웹서비스입니다."};

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  appendMessage("👤", message);
  input.value = "";

  let reply = "죄송해요, 그 내용은 아직 학습되지 않았어요.";
  for (let key in staticResponses) {
    if (message.includes(key)) {
      reply = staticResponses[key];
      break;
    }
  }
  appendMessage("🤖", reply);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<strong>${sender}</strong>: ${text}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
