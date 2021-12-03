var styles = `

.past-work {
  transition-property: color, background-color, padding;
  transition-duration: 200ms, 200ms, 200ms;
  transition-timing-function: ease, ease, ease;
}

.avatar {
    overflow: hidden;
}
`

var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)