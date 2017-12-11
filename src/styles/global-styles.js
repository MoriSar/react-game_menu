import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
	background: url('./images/bg.png') repeat center center fixed #E8E8E8;
	font-family: Arial, Helvetica, sans-serif;
	overflow-x: hidden;
	overflow-y: scroll;
}
header {
	background-color: #e0e0e0;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
	-webkit-border-radius: 5%;
	-moz-border-radius: 5%;
	border-radius: 1em;
}
.company-logo {
	height: 17vh;
	background: url('./images/logo.png') no-repeat scroll 50% 40% / 90% #fff;
}
.control-panel {
}
.main-content {
}
button {
font-family: 'Orbitron', sans-serif;    
}
.App {
position: relative;
}
.App[data-preloader_status="true"] header {
    filter: blur(10px);
}
.App[data-preloader_status="true"] section {
    filter: blur(10px);
}
`
