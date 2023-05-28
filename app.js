const buttons = document.querySelectorAll(".btn")
const screen = document.querySelector(".display__text")

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    calculate(button)
  })
)

let typedNumbers = []

function calculate(button) {
  let result
  let rawNumber = button.innerText

  if (rawNumber === "AC") {
    typedNumbers = []
  } else if (button.id === "delete-one") {
    typedNumbers.pop()
    result = typedNumbers.join("")
  } else if (rawNumber === "=") {
    result = eval(typedNumbers.join(""))
  } else {
    typedNumbers.push(rawNumber)
    result = typedNumbers.join("")
  }
  display(result)
}

function display(result) {
  if (result === undefined) {
    screen.innerText = ""
  } else {
    screen.innerText = result
  }
}
