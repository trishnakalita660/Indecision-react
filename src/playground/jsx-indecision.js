console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subTitle: 'This is a test app',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();

    }

}

const resetOption = () => {
    console.log("clicked");

    app.options = [];
    render();
};
const newDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{app.title ? app.title : "Unknown"}</h1>
           {app.subTitle && <p>{app.subTitle} </p>}
            <p> {app.options.length > 0 ? "Here are your options: " : "No options"}</p>

            <button disabled={app.options.length === 0} onClick={newDecision}>What Next?</button>
            <button onClick={resetOption}>Remove All</button>


            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}  >
                <input type="text" name="option" />
                <button>Add Text</button>


            </form>
        </div>

    );

    ReactDOM.render(template, appRoot);
}
render();
