function Person(props) {
    return (
        <div class="person">
            <h1>{props.name}</h1>
            <p>You age: {props.age}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name="Dilshod" age="37" />
        <Person name="Nodira" age="27" />
    </div>
);

ReactDOM.render(app, document.querySelector("#root"));
