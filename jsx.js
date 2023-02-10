
// declerative way -what to do just order
ReactDOM.render(<div>
    <h1>hello world</h1>
    <h1 className="header">this is declerative way</h1>

</div>, document.getElementById("root"))


const navbar = (
    < nav >
        <h1>nikhil's napbar</h1>
        <ul>
            <li>menu items</li>
            <li>menu items</li>
            <li>menu items</li>

        </ul>

    </nav >
)
ReactDOM.render(navbar, document.getElementById("root"));