let ukrbutton = document.querySelector('.u'),engbutton = document.querySelector('.e');
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <h1 className=" font-italic">Про журнал</h1>
            <p className="lead my-3">Ars linguodidacticae (Мистецтво лінгводидактики) – це академічний
                рецензований журнал, який виходить друком 2 рази на рік в Інституті
                філології Київського національного університету імені Тараса Шевченка.</p>
            <p className="lead mb-0"><a href="ald-about.html" className=" btn btn-default text-black font-weight-bold">Читати
                далі...</a></p>
        </div>);
    }
};
class Permition extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="cover">
            <h3 className="h">Свідоцтво</h3>
            <p>Повномаштабну версію свідоцтва про державну реєстрацію можна скачати за посиланням</p>
            <a href="images/permition.jpg" className="download btn btn-default shadow-sm" download>Download.</a>
        </div>);
    }
}
class Cover extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="cover">
            <h3  className="h">Обкладинка</h3>
            <p>Повномаштабну версію обкладинки можна скачати за посиланням</p>
            <a href="images/cover.jpg" className="download btn btn-default shadow-sm" download>Download.</a>
        </div>);
    }
}
class Policy extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="infocontain" id="1">
                <h2 className="header">Політика експертної оцінки</h2>
                <p>Всі документи розглядаються двома незалежними експертами, призначеними редакційною колегією,
                    яка складається з відомих фахівців у відповідній науковій галузі.
                    Остаточне рішення про публікацію або відхилення статті робиться головним редактором, який керується в своїх діях висновками експертів.
                    Представляючи статтю, автор може вимагати виключення двох науковців або двох університетів / інститутів зі списку можливих експертів.</p>
                <p>Процедура експертизи може тривати від 2 тижнів до 2 місяців. Редколегія інформує автора про коментарі
                    експертів, їхні зауваження та про рішення експертів:</p>
                <ul className="list">
                    <li>прийняти статтю до друку;</li>
                    <li>прийняти статтю до друку за умови усунення окремих зауважень;</li>
                    <li>відхилити статтю;</li>
                </ul>
                <p>Якщо рішення є позитивним, автор врахував та усунув зауваження (після
                    чого стаття ще раз була переглянута рецензентами), автор надсилає до редакції
                    підписану статтю. Остаточна версія статті підписується автором і експертами до
                    друку, і подальші зміни не дозволяються. Підтверджуючи зміст випуску,
                    Редколегія враховує дату отримання остаточної версії документа.</p>
                <p>Вчені, які хочуть взяти участь у процедурі експертного огляду Журналу,
                    повинні мати ступінь у відповідних наукових галузях, відповідний досвід та
                    високу репутацію в академічному світі. Будь-ласка, надішліть своє резюме до
                    редакційної колегії на адресу <span className="color-blue">kafmetod@ukr.net.</span></p>
                <p>Журнал керується етичними стандартами, рекомендованими Комітетом з
                    етики публікацій. Ми рекомендуємо ознайомитись із відповідними правилами на
                    офіційному веб-сайті COPE: <a href="http://publicationethics.org" className="color-blue"
                                                  target="_blank">http://publicationethics.org</a></p>
                <p> Ми також рекомендуємо ознайомитись із набором ресурсів з етики
                    публікацій, рекомендованими: <a href="http://www.elsevier.com/editors/perk" className="color-blue"
                                                    target="_blank">&quot;Elsevier&quot;</a></p>
                <p>Ми також рекомендуємо ознайомитись із рекомендаціями <a href="http://www.elsevier.com/ethics/home"
                                                                           className="color-blue"
                                                                           target="_blank">&quot;Elsevier&quot;</a> щодо
                    того, як уникнути порушень публічної етики під час підготовки академічної
                    публікації.</p>
                <h5 className="left">Авторське право</h5>
                <p>
                    Надання рукопису статті редакції Журналу передбачає згоду автора / авторів
                    на опублікування статті в друкованих та електронних версіях Журналу, а також
                    на передачу журналу відповідним авторським правам. Автор гарантує, що

                    поданий рукопис не порушує авторських прав або інших прав будь-якої сторони
                    та що цей документ раніше не був опублікований і не був поданий одночасно з
                    будь-яким іншим виданням.</p>
                <div>
                    <p className="paragraph">The submission of the manuscript to the Editorial Board of the Current
                        Issues of Mass
                        Communication involves the consent of the author / authors to publish the paper in print and
                        electronic versions
                        of the Journal, and to transfer to the Journal the respective copyright. The author guarantees
                        that the submitted
                        manuscript does not infringe copyright or other rights of any party, and that the paper has not
                        been previously
                        published and is not submitted simultaneously to any other edition.</p>
                </div>
            </div>
        );
    }
}
class EditColegy extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <div>
                    <h2 className="header" id="2">Редакційна колегія</h2>
                    <p>Головний редактор:
                        В’ячеслав Шовковий, доктор педагогічних наук, професор, завідувач
                        кафедри методики викладання української та іноземних мов і літератур
                        Інституту філології Київського національного університету імені Тараса
                        Шевченка (Україна).</p>
                    <h4 className="color-blue">Редакція:</h4>
                    <p>Любашенко Олеся, доктор педагогічних наук, професор, професор
                        кафедри методики викладання української та іноземних мов і літератур
                        Інституту філології Київського національного університету імені Тараса
                        Шевченка (Україна);</p>
                    <p>Бех Петро, кандидат філологічних наук, професор, професор кафедри
                        методики викладання української та іноземних мов і літератур Інституту
                        філології, проректор з науково-педагогічної роботи (міжнародні зв&#39;язки),
                        Київського національного університету імені Тараса Шевченка, (Україна);</p>
                    <p>Данчак Павел, доктор педагогічних наук, професор, професор кафедри
                        педагогіки інституту філософії і релігієзнавства Прешовського університету
                        (Словацька Республіка);</p>
                    <p>Зязюн Лариса, доктор педагогічних наук, професор, професор кафедри
                        романської філології Інституту філології Київського національного університету
                        імені Тараса Шевченка, (Україна);</p>
                    <p>Задорожна Ірина, доктор педагогічних наук, професор, завідувач кафедри
                        практики англійської мови та методики її викладання Тернопільського
                        національного педагогічного університету імені В.Гнатюка, (Україна);</p>
                    <p>Морська Лілія, доктор педагогічних наук, професор, завідувач кафедри
                        англійської філології Тернопільського національного педагогічного університету
                        імені В.Гнатюка, (Україна);</p>
                    <p>Петращук Олена, доктор педагогічних наук, професор, професор кафедри
                        авіаційної англійської мови Інституту аеронавігації Національного авіаційного
                        університету (Україна); </p>
                    <p>Сєронь Роман, доктор педагогічних наук, професор, директор Інституту
                        педагогіки Відділу права і наук про суспільство в Стальовій  Волі Люблінського
                        католицького університету імені Яна Павла II (Республіка Польща).</p>
                    <p>Кавицька Тамара, кандидат педагогічних наук, асистент кафедри методики
                        викладання української та іноземних мов і літератур Інституту філології
                        Київського національного університету імені Тараса Шевченка (Україна).</p>
                    <h5 className="color-blue">Виконавчий секретар:</h5>
                    <p>Сем’ян Наталія, асистент кафедри методики викладання української та
                        іноземних мов і літератур Інституту філології Київського національного
                        університету імені Тараса Шевченка (Україна).</p>
                    <h3 className="h" id="3a">Етика публікацій</h3>
                    <p>Ми також рекомендуємо ознайомитись із набором ресурсів з етики
                        публікацій, рекомендованими &quot;Elsevier&quot;: <a href="http://www.elsevier.com/ethics/home">http://www.elsevier.com/editors/perk</a>.</p>
                    <p>Та із рекомендаціями &quot;Elsevier&quot;
                        щодо того, як уникнути порушень публічної етики під час підготовки
                        академічної публікації: <a href="http://www.elsevier.com/ethics/home">http://www.elsevier.com/ethics/home</a>.</p>
                </div>
        );
    }
}
class HeaderEng extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="eng">
                <h1 className="font-italic">About</h1>
                <p>Ars Linguodidacticae publishes outcomes of original research on teaching
                    Ukrainian and foreign languages and literatures with relevance to secondary as well as
                    tertiary education.</p>
                <p className="lead mb-0"><a href="ald-about.html" className=" btn btn-default text-black font-weight-bold">Read more...</a></p>
            </div>
        );
    };
}
class PermitionEng extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="cover" id="eng">
                <h3 className="h">Certification</h3>
                <p>The full version of the state registration certificate can be downloaded at the link</p>
                <a href="images/permition.jpg" className="download btn btn-default shadow-sm" download>Download.</a>
            </div>
        );
    };
}
class CoverEng extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="cover" id="eng">
            <h3  className="h">The cover</h3>
            <p>The full version of the cover can be downloaded from the link</p>
            <a href="images/cover.jpg" className="download btn btn-default shadow-sm" download>Download.</a>
        </div>);
    }
}
class PolicyEng extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="infocontain" id="1">
                <h2 className="header">Peer Review Policy</h2>
                <p>All the papers are reviewed by two independent experts, appointed by the Editorial
                    Board. The final decision to publish or decline the paper is made by the Editor-in-Chief
                    who is guided in his actions by the conclusions of the experts.</p>
                <p>Peer reviewing procedure may take up from 2 weeks to 2 months. The Editorial
                    Board informs the author of the reviewers’ comments and the decision to accept or decline
                    the paper.</p>
                <p>If the decision is positive, the author makes the appropriate corrections and sends to
                    the Editorial Board the final version of the paper. This edited version is approved for
                    publishing, and no further changes are allowed.</p>
                <p>The Editorial Board welcomes the researches willing to take part in peer reviewing
                    the Journal. The candidates are required to have appropriate academic experience and hold
                    a scientific degree in Education, Pedagogical Studies, Linguistics and Applied Linguistics.
                    Please send your resume to the Editorial Board at <a href="mailto:pedagogical.studies@gmail.com">pedagogical.studies@gmail.com</a></p>
                <p>The Journal is guided by ethical standards, developed by the Committee on
                    Publication Ethics. The standards are available from <a href="http://publicationethics.org">http://publicationethics.org</a>.</p>
                <h5>Copyright</h5>

                <p>The submission of the manuscript to the Editorial Board of the Current Issues of
                    Mass Communication involves the consent of the author / authors to publish the paper in
                    print and electronic versions of the Journal, and to transfer to the Journal the respective
                    copyright. The author guarantees that the submitted manuscript does not infringe copyright
                    or other rights of any party, and that the paper has not been previously published and is not
                    submitted simultaneously to any other edition.</p>
                <div>
                    <p className="paragraph">The submission of the manuscript to the Editorial Board of the Current
                        Issues of Mass
                        Communication involves the consent of the author / authors to publish the paper in print and
                        electronic versions
                        of the Journal, and to transfer to the Journal the respective copyright. The author guarantees
                        that the submitted
                        manuscript does not infringe copyright or other rights of any party, and that the paper has not
                        been previously
                        published and is not submitted simultaneously to any other edition.</p>
                </div>
                <div>
                    <p className="paragraph">The submission of the manuscript to the Editorial Board of the Current
                        Issues of Mass
                        Communication involves the consent of the author / authors to publish the paper in print and
                        electronic versions
                        of the Journal, and to transfer to the Journal the respective copyright. The author guarantees
                        that the submitted
                        manuscript does not infringe copyright or other rights of any party, and that the paper has not
                        been previously
                        published and is not submitted simultaneously to any other edition.</p>
                </div>
            </div>
        );
    }
}
class EditColegyEng extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2 className="header" id="2">Editorial Board</h2>
                <p>Editor-in-Chief:
                    Vyacheslav Shovkovyi, Dr. Sc. in Education, Professor, Head of the Department of
                    Methodology for Teaching Ukrainian and Foreign Languages and Literatures, Institute of
                    Philology, Taras Shevchenko National University of Kyiv, Ukraine</p>
                <h2 className="color-blue">Editional Board:</h2>
                <p>Olesia Liubashenko, Dr. Sc. in Education, Professor, Taras Shevchenko National
                    University of Kyiv, Ukraine</p>
                <p>Petro Bekh, PhD in Philology, Professor, Taras Shevchenko National University of Kyiv,
                    Ukraine</p>
                <p>Pavel Danchak, Dr. Sc. in Education, Professor, the University of Presov, the Slovak
                    Republic</p>
                <p>Larysa Ziaziun, Dr. Sc. in Education, Professor, Taras Shevchenko National University of
                    Kyiv, Ukraine</p>
                <p>Lilia Morska, Dr. Sc. in Education, Professor, Ternopil Volodymyr Hnatiuk National Pedagogical University, Ukraine</p>
                <p>Olena Petraschuk, Dr. Sc. in Education, Professor, National Aviation University, Ukraine</p>
                <p>Roman Sieron, Dr. Sc. in Education, Professor, John Paul II Catholic University of Lublin, the Republic of Poland
                </p>
                <p>Tamara Kavytska, PhD in Education, Assistant Professor, Taras Shevchenko National University of Kyiv, Ukraine  </p>
                <p>Iryna Zadorozhna, Dr. Sc. in Education, Professor, Ternopil Volodymyr Hnatiuk National Pedagogical University, Ukraine</p>
                <h5 className="color-blue">Executive Secretary:</h5>
                <p>Natalia Semian, Lecturer, Taras Shevchenko National University of Kyiv, Ukraine  </p>
                <h3 className="h" id="3a">Publication ethics</h3>
                <p>We also suggest getting acquainted with the Publishing Ethics Resource Kit,
                    recommended by the «Elsevier»: <a href="http://www.elsevier.com/editors/perk">http://www.elsevier.com/editors/perk</a>.</p>
                <p>The guidelines on how to avoid the violations of the Publication Ethics while preparing the
                    academic publication are available from <a href="http://www.elsevier.com/ethics/home">http://www.elsevier.com/ethics/home</a>.</p>
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
            <p>Журнал Ars Linguodidacticae належить до наукометричних баз даних</p>
            <p><a href="http://www.nbuv.gov.ua/" target="_blank"><img className="lib" src="images/nbuv.png" alt="1"/></a></p>
            <p><a href="http://www.library.univ.kiev.ua/ukr/title4.php3" target="_blank"><img className="libi" src="images/zagolov.png" alt="2"/></a></p>
            <p>E-mail - sergshovkanser@gmail.com</p>
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
                <p><a href="http://www.nbuv.gov.ua/" target="_blank"><img className="lib" src="images/nbuv.png" alt="1"/></a></p>
                <p><a href="http://www.library.univ.kiev.ua/ukr/title4.php3" target="_blank"><img className="libi" src="images/zagolov.png" alt="2"/></a></p>
                <p>E-mail - sergshovkanser@gmail.com</p>
            </div>
        );
    }
}
window.onload = ukr();
ukrbutton.addEventListener('click', ukr);
engbutton.addEventListener('click',eng);
function eng(){
    ReactDOM.render(<HeaderEng />, document.getElementById('topblock'));
    ReactDOM.render(<PermitionEng />, document.getElementById('permition'));
    ReactDOM.render(<CoverEng />, document.getElementById('cover'));
    ReactDOM.render(<PolicyEng />, document.getElementById('policy'));
    ReactDOM.render(<EditColegyEng />, document.getElementById('edit'));
    ReactDOM.render(<Engfoot />, document.getElementById('footer'));

}
function ukr() {
    ReactDOM.render(<Header />, document.getElementById('topblock'));
    ReactDOM.render(<Permition />, document.getElementById('permition'));
    ReactDOM.render(<Cover />, document.getElementById('cover'));
    ReactDOM.render(<Policy />, document.getElementById('policy'));
    ReactDOM.render(<EditColegy />, document.getElementById('edit'));
    ReactDOM.render(<Foot />, document.getElementById('footer'));

}
