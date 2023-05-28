const buttons = document.querySelectorAll(".btn")
const screen = document.querySelector(".display__text")
const deleteAll = document.getElementById("delete-all")

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
    console.log("Cleared")
  } else if (button.id === "delete-one") {
    typedNumbers.pop()
    result = typedNumbers.join("")
    console.log("Deleted one")
  } else if (rawNumber === "=") {
    result = eval(typedNumbers.join(""))
    console.log("Calculated")
  } else if (rawNumber === "( )") {
    console.log("Parenthesis found")
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
