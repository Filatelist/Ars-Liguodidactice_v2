let ukrbutton = document.querySelector('.u'),engbutton = document.querySelector('.e');
class About extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h3 className="font-italic">Про журнал</h3>
                <p>Журнал публікує оригінальні матеріали, присвячені дослідженню
                    актуальних питань навчання української та іноземних мов учнів середньої
                    школи та студентів вищих закладів освіти, включаючи історію
                    лінгводидактичних досліджень, теоретичні засади навчання мов, практичні
                    розробки та методичні рекомендації з окресленої проблематики.</p>
                <p>У журналі можуть публікувати результати своїх досліджень викладачі,
                    аспіранти, студенти магістратури.</p>
                <p>Формат журналу відповідає міжнародним стандартам. Всі статті
                    проходять процедуру рецензування. Тези доповідей англійською,
                    українською та російською мовами відображають основний зміст наукових
                    досліджень. Списки довідників копіюються латинським алфавітом для
                    індексації в міжнародних базах даних абстрактних і цитаткових.</p>
                <p>Головний редактор: завідувач кафедри методики викладання української
                    та іноземних мов і літератур Інституту філології, доктор педагогічних наук,
                    професор В’ячеслав Шовковий.</p>
                <div className="infor">
                    <p>Редакційна колегія з актуальних питань навчання української та
                        іноземних мов охоплює видатних українських та зарубіжних учених у галузі
                        лінгводидактики.</p>
                    <p>Примірники журналу надсилаються до бібліотек, які входять до
                        обов’язкового списку розсилки наукових видань, затвердженого МОН
                        України, та провідних університетів, які забезпечують професійну вищу
                        освіту в галузі підготовки філологів та вчителів української та іноземних мов.</p>
                    <p>Всі права зарезервовані. При цитуванні слід згадати автора статті та
                        Журналу. Перепечатки або репродукції у будь-якій формі можливі лише за
                        попереднім дозволом видавця.</p>
                </div>
                <span className="margines"></span>
            </div>
        );
    }
}
class AboutEng extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="eng">
                <h3 className="font-italic">About</h3>
                <p>Ars Linguodidacticae publishes outcomes of original research on teaching
                    Ukrainian and foreign languages and literatures with relevance to secondary as well as
                    tertiary education. The journal welcomes contributions - reports of empirical research or
                    conceptual articles - which critically reflect on current theories and practices in teaching
                    methodology and applied linguistics.</p>
                <p>The journal’s mission is to serve as a research forum for a diverse group of
                    scholars and increase the quality of language teaching and learning programmes
                    offered by language education providers in secondary and higher education by
                    presenting new models and by disseminating best teaching practices and results of
                    research activities.</p>

                <p>The journal covers a wide range of language and literature education issues
                    including history and theory of education, translation pedagogy, language testing and
                    assessment as well as aspects of professional development, quality assurance and
                    university language policy.</p>
                <p>Ars Linguodidacticae is an Open Access journal. Abstracts and full texts of all
                    articles published in this journal are freely accessible to everyone immediately after
                    publication without any form of restriction.</p>
                <p>Publications should be original, technically sound, and clearly written in
                    Ukrainian, Russian, English or Polish. All papers will be reviewed first by the edition for
                    quality assurance, with papers not meeting the requirements returned as “not
                    accepted”. Following this, each accepted paper will be assigned 2 reviewers who will
                    assess the paper based on the quality of its contribution. Reviews are requested within
                    21 days of editor request with a decision issued to the author shortly thereafter.</p>
                <p>Authors are required to pay the manuscript handling fee only after their
                    manuscripts have been reviewed and accepted for publication by an editor.
                    The manuscript handling fee for AL is 40 UAH per page.</p>
                <p>All rights reserved. Under the Open Access Policy, the materials published in the
                    journal can be used for non-commercial purposes if the original source and author(s)
                    are cited.
                    Editor-in Chief: Vyacheslav Shovkovyi, Dr. Sc. in Education, Professor, Head of
                    the Department of Methodology for Teaching Ukrainian and Foreign Languages and
                    Literatures, Institute of Philology, Taras Shevchenko National University of Kyiv.</p>
                <span className="margines"></span>
            </div>
        );
    }
}
class Foot extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="information">
                <p className="marg">Журнал Ars Linguodidacticae належить до наукометричних баз даних</p>
                <p>E-mail - sergshovkanser@gmail.com</p>
                <p><a href="http://www.nbuv.gov.ua/" target="_blank"><img className="lib" src="images/nbuv.png" alt="1"/></a></p>
                <p><a href="http://www.library.univ.kiev.ua/ukr/title4.php3" target="_blank"><img className="libi" src="images/zagolov.png" alt="2"/></a></p>
            </div>
        );
    }
}
class Engfoot extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="information">
                <p>Journal Ars Linguodidacticae belongs to science-computer databases</p>
                <p>E-mail - sergshovkanser@gmail.com</p>
                <p><a href="http://www.nbuv.gov.ua/" target="_blank"><img className="lib" src="images/nbuv.png" alt="1"/></a></p>
                <p><a href="http://www.library.univ.kiev.ua/ukr/title4.php3" target="_blank"><img className="libi" src="images/zagolov.png" alt="2"/></a></p>
            </div>
        );
    }
}
window.onload = ukr();
ukrbutton.addEventListener('click', ukr);
engbutton.addEventListener('click', eng);
function ukr() {
    ReactDOM.render(<About />, document.getElementById('about'));

}
function eng() {
        ReactDOM.render(<AboutEng />, document.getElementById('about'));
    if (document.getElementById('archive')){
        ReactDOM.render(<Engarchives />, document.getElementById('about'));
    }
}