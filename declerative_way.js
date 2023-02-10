// imperative way-how to do this  valinna js follows this
// just creating new element in div root with classname header

// const hi = document.createElement("hi");
// hi.textContent = "this is imperative way";
// hi.className = "header";
// document.getElementById("root").append(hi);





// declerative way -what to do just order
ReactDOM.render(<h1 className="header">this is declerative way</h1>,document.getElementById("root"))