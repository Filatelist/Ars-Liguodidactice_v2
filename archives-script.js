let ukrbutton = document.querySelector('.u'),engbutton = document.querySelector('.e');
class Archives extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="information">
                <h3 className="color-blue">Архіви</h3>
                <ul>
                    <li className="list li"><a href="number1.html">Ars linguodidacticae №1 (1-2017)</a></li>
                    <li className="list li"><a href="number2.html">Ars linguodidacticae №2 (1-2018)</a></li>
                </ul>
            </div>
        );
    }
}
class Engarchives extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="information">
                <h3 className="color-blue">Archives</h3>
                <ul>
                    <li className="list li"><a href="number1.html">Ars linguodidacticae №1 (1-2017)</a></li>
                    <li className="list li"><a href="number2.html">Ars linguodidacticae №2 (1-2018)</a></li>
                </ul>
            </div>
        );
    }
}
window.onload = ukr();
ukrbutton.addEventListener('click', ukr);
engbutton.addEventListener('click', eng);
function ukr() {
    ReactDOM.render(<Archives />, document.getElementById('archive'));
}
function eng() {
    if (!document.getElementById('eng')){
        ReactDOM.render(<Engarchives />, document.getElementById('archive'));
    }
}