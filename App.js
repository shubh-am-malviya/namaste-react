// const heading = React.createElement("h1", {}, "Hello World from react");

const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child1" }, [
		React.createElement("h1", { class: "heading" }, "I m React h1 tag"),
		React.createElement("h2", { class: "heading" }, "I am React h2 tag"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", { class: "heading" }, "I m React h1 tag"),
		React.createElement("h2", { class: "heading" }, "I am React h2 tag"),
	]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);