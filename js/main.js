var styles = `

.work {
  transition-property: color, background-color, padding;
  transition-duration: 200ms, 200ms, 200ms;
  transition-timing-function: ease, ease, ease;
}

a {
  transition-property: border-color;
  transition-duration: 200ms;
  transition-timing-function: ease;
}

.avatar {
    overflow: hidden;
}
#hello {
	animation: pulse 10s;
}

#hello:before {
	content: "Hey 👋";
	animation: spin 10s linear;
}

@keyframes spin {
  0% { content:"Namasté"; }
  50% { content:"السلام علیکم عزیز"; }
  100% { content:"Hello Jee"; }
}

.avatar {
    cursor : alias;
}
`

var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)