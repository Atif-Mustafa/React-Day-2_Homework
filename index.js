const rootdiv = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootdiv);

let container = React.createElement("div", {style:{width: "80%", marginInline: "auto", fontSize: "1rem"}}, React.createElement("h1", {style:{fontSize: "3rem"}}, "Topics covered"),
React.createElement("p", {}, "The following is a list of all the topics we cover in the MDN learning area."),
React.createElement("section", {}, React.createElement("a", {style:{textDecoration: "underline", color: "blue"}}, "Getting started with the web "), React.createElement("p", {style: {marginInlineStart: "1rem"}}, "Provides a practical introduction to web development for complete beginners.")),
React.createElement("section", {}, React.createElement("a", {style:{textDecoration: "underline", color: "blue"}}, "HTML -- Structuring the web"), React.createElement("p", {style: {marginInlineStart: "1rem"}}, "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.")),
React.createElement("section", {}, React.createElement("a", {style:{textDecoration: "underline", color: "blue"}}, "CSS -- Styling the web"), React.createElement("p", {style: {marginInlineStart: "1rem"}}, "CSS is the language that we use to control our web content's style and layout, as well as adding behaviour like animation. This topic provides comprehensive coverage of CSS."))
);

reactRoot.render(container);