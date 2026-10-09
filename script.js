const searchBox = document.getElementById("search");

searchBox.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		const { value } = searchBox;
		if (value.trim().length > 0) location.href = `https://duckduckgo.com/?q=${encodeURIComponent(value.trim())}`;
		else searchBox.value = "";
	}
});

window.onload = () => {
	document.getElementsByTagName("body")[0].removeAttribute("class");
};
