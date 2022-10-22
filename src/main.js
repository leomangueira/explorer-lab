import "./css/index.css"

const ccBgColors01 = document.querySelector(
  ".cc-bg svg > g g:nth-child(1) path"
)
const ccBgColors02 = document.querySelector(
  ".cc-bg svg > g g:nth-child(2) path"
)
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#2D57F2", "#436D99"],
    mastercard: ["#C69347", "#DF6F29"],
    rocketseat: ["#8257E5", "#AF57E5"],
    default: ["black", "gray"]
  }

  ccBgColors01.setAttribute("fill", colors[type][0])
  ccBgColors02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}
setCardType("rocketseat")
// Função global para executar via browser
// globalThis.setCardType = setCardType
