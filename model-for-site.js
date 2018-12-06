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
            <p className="lead mb-0"><a href="ald-about.html" className="download btn btn-default text-black font-weight-bold">Читати
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
            <a href="images/cover.jpg" className="download btn shadow-sm" download>Download.</a>
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
                <h2 className="header border-left-sm-deep">Політика експертної оцінки</h2>
                <p>Всі документи розглядаються двома незалежними експертами, призначеними редакційною колегією,
                    яка складається з відомих фахівців у відповідній науковій галузі.
                    Остаточне рішення про публікацію або відхилення статті робиться головним редактором, який керується в своїх діях висновками експертів.
                    Представляючи статтю, автор може вимагати виключення двох науковців або двох університетів / інститутів зі списку можливих експертів.</p>
                <p>Процедура експертизи може тривати від 2 тижнів до 2 місяців. Редколегія інформує автора про коментарі
                    експертів, їхні зауваження та про рішення експертів:</p>
                <ul className="list border-left-sm">
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
                <div className="info">
                <h5 className="left">Авторське право</h5>
                <p>
                    Надання рукопису статті редакції Журналу передбачає згоду автора / авторів
                    на опублікування статті в друкованих та електронних версіях Журналу, а також
                    на передачу журналу відповідним авторським правам. Автор гарантує, що

                    поданий рукопис не порушує авторських прав або інших прав будь-якої сторони
                    та що цей документ раніше не був опублікований і не був поданий одночасно з
                    будь-яким іншим виданням.</p>

                    <p className="paragraph pa m">The submission of the manuscript to the Editorial Board of the Current
                        Issues of Mass
                        Communication involves the consent of the author / authors to publish the paper in print and
                        electronic versions
                        of the Journal, and to transfer to the Journal the respective copyright. The author guarantees
                        that the submitted
                        manuscript does not infringe copyright or other rights of any party, and that the paper has not
                        been previously
                        published and is not submitted simultaneously to any other edition.</p>
                </div>
                <span className="margines"></span>
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
                <div className="infor">
                    <h2 className="header" id="2">Редакційна колегія</h2>
                    <p>Головний редактор:
                        В’ячеслав Шовковий, доктор педагогічних наук, професор, завідувач
                        кафедри методики викладання української та іноземних мов і літератур
                        Інституту філології Київського національного університету імені Тараса
                        Шевченка (Україна).</p>
                    <h4 className="color-blue">Редакція:</h4>
                    <ul className="border-left-sm">
                        <li>Любашенко Олеся, доктор педагогічних наук, професор, професор
                            кафедри методики викладання української та іноземних мов і літератур
                            Інституту філології Київського національного університету імені Тараса
                            Шевченка (Україна);</li>
                        <li>Бех Петро, кандидат філологічних наук, професор, професор кафедри
                            методики викладання української та іноземних мов і літератур Інституту
                            філології, проректор з науково-педагогічної роботи (міжнародні зв&#39;язки),
                            Київського національного університету імені Тараса Шевченка, (Україна);</li>
                        <li>Данчак Павел, доктор педагогічних наук, професор, професор кафедри
                            педагогіки інституту філософії і релігієзнавства Прешовського університету
                            (Словацька Республіка);</li>
                        <li>Зязюн Лариса, доктор педагогічних наук, професор, професор кафедри
                            романської філології Інституту філології Київського національного університету
                            імені Тараса Шевченка, (Україна);</li>
                        <li>Задорожна Ірина, доктор педагогічних наук, професор, завідувач кафедри
                            практики англійської мови та методики її викладання Тернопільського
                            національного педагогічного університету імені В.Гнатюка, (Україна);</li>
                        <li>Морська Лілія, доктор педагогічних наук, професор, завідувач кафедри
                            англійської філології Тернопільського національного педагогічного університету
                            імені В.Гнатюка, (Україна);</li>
                        <li>Петращук Олена, доктор педагогічних наук, професор, професор кафедри
                            авіаційної англійської мови Інституту аеронавігації Національного авіаційного
                            університету (Україна); </li>
                        <li>Сєронь Роман, доктор педагогічних наук, професор, директор Інституту
                            педагогіки Відділу права і наук про суспільство в Стальовій  Волі Люблінського
                            католицького університету імені Яна Павла II (Республіка Польща).</li>
                        <li>Кавицька Тамара, кандидат педагогічних наук, асистент кафедри методики
                            викладання української та іноземних мов і літератур Інституту філології
                            Київського національного університету імені Тараса Шевченка (Україна).</li>
                    </ul>
                    <div className="info">
                        <h5 className="color-blue">Виконавчий секретар:</h5>
                        <p>Сем’ян Наталія, асистент кафедри методики викладання української та
                            іноземних мов і літератур Інституту філології Київського національного
                            університету імені Тараса Шевченка (Україна).</p>
                        <h5 className="h " id="3a">Етика публікацій</h5>
                        <p>Усі статті, подані до Ars linguodidacticae (Мистецтво лінгводидактики), рецензуються на оригінальність та дотримання етичних норм.</p>
                        <h5 className="h">Обов'язки автора</h5>
                        <p>Авторство рукопису: Авторство повинно належати особам, які брали участь у концептуалізації,  виконанні та інтерпретації дослідження. Перш ніж надсилати рукопис, необхідно впеанитися, щоб всі автори були внесені до списку і схвалили остаточну версію статті.</p>
                        <p>Оригінальність та плагіат: авторам птрібно надати оригінальну працю, яка буде публікуватися вперше. Якщо автори використали працю або слова інших авторів, це повинно бути оформлено згідно з правилами цитування. Плагіат розглядається як неетична поведінка і спричинить репутаційний ризики  для авторів і журналу.</p>
                        <p>Доступ до даних: автори повинні забезпечити доступ до праці для редакційного огляду, зберігати працю протягом року з моменту публікації.</p>
                        <p>
                            Одночасне видання: Автори не повинні публікувати рукопис, який представляє ті ж результати дослідження в декількох журналах. Надання одного рукопису з обсягом однакового тексту більше як 25% до декількох журналів є неетичною поведінкою публікації та і спричинить репутаційний ризики  для авторів і журналу.

                        </p>
                        <p>Приховане авторство. Редактори рішуче не схвалюють приховане авторство, наявність авторства під чужим іменем розглядається як наукова нечесність.

                        </p>
                        <p>Гостьове авторство стосується ситуації, коли внесок людини в рукопис мінімальний або взагалі не відбувся, але незважаючи на це він включений як автор / співавтор твору.</p>
                        <h5 className="h">Обов'язки редактора</h5>
                        <p>Моніторинг етичних стандартів: редакція виконує моніторинг етичних стандартів наукових публікацій та вживає заходів проти будь-яких зловживань.</p>
                        <p>
                            Неупередженість: Вирішальне значення має розв’язання питання про прийняття чи відхилення рукопису, якість роботи, її оригінальність, чіткість та відповідність до обсягу журналу. Рукописи оцінюються на основі їх наукової заслуги незалежно від раси, статі, сексуальної орієнтації, релігійних переконань, громадянства чи політичної ідеології авторів.

                        </p>
                        <p>
                            Конфіденційність: редактори повинні переконатися, що всі матеріали, надані журналу, залишаються конфіденційними під час розгляду. Вони не повинні розкривати інформацію про подану рукопис нікому, крім авторів, рецензентів та потенційних рецензентів.

                        </p>
                        <p>
                            Розголошення та конфлікт інтересів: неопубліковані матеріали надані в рукописі, не повинні використовуватися редактором та редакцією у власному дослідженні без письмової згоди автора (ів). Редакційна колегія не призначає рецензентами тих, хто перебуває  в особистих або професійних стосунках з автором (авторами).
                        </p>
                        <h5 className="h">Обов'язки рецензента</h5>
                        <p>
                            Оперативність: будь-який рецензент, який не вважає себе кваліфікованим переглянути рукопис або знає, що його своєчасний огляд стане неможливим, повинен повідомити редакторів.
                        </p>
                        <p>
                            Конфіденційність: всі переглянуті рукописи повинні розглядатися як конфіденційні документи. Їх не можна демонструвати та обговорювати з іншими, крім  членів редакційної колегії.

                        </p>
                        <p>
                            Об'єктивність: огляди повинні проводитися об'єктивно, із використанням наукових аргументів, з метою підвищення якості рукопису. Особиста критика авторів вважається недоцільною. Рецензенти повинні чітко висловлювати свої погляди та надавати відповідні аргументи.

                        </p>
                        <p>Розголошення або конфлікт інтересів: рецензенти не повинні переглядати рукописи, в яких вони мають конфлікт інтересів, що виникає внаслідок конкурентних, спільних чи інших зв'язків з автором. Інформація, отримана шляхом експертного огляду, повинна бути конфіденційною та не використовуватися для особистої користі.

                        </p>
                        <p className="h">Анонімність</p>
                        <p>Всі огляди проводяться анонімно. Редактори не розголошують інформацію про рецензентів.</p>
                        <span className="margines"></span>
                    </div>
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
                <p className="lead mb-0"><a href="ald-about.html" className="download btn btn-default text-black font-weight-bold">Read more...</a></p>
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
                <div className="info">
                <h5>Copyright</h5>

                    <p className="paragraph pa m">The submission of the manuscript to the Editorial Board of the Current
                        Issues of Mass
                        Communication involves the consent of the author / authors to publish the paper in print and
                        electronic versions
                        of the Journal, and to transfer to the Journal the respective copyright. The author guarantees
                        that the submitted
                        manuscript does not infringe copyright or other rights of any party, and that the paper has not
                        been previously
                        published and is not submitted simultaneously to any other edition.</p>
                </div>
                <span className="margines"></span>
            </div>
        );
    }
}
class Contacts extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                    <h3 className="h">Офіс видання</h3>
                    <p>Кафедра викладання української та іноземних мов і літератур <br/>
                        Інституту філології Київського національного університету імені Тараса Шевченка <br/>
                        01601, Київ, бульв. Т.Шевченка, 14, к. 134.<br/>
                        <span className="outline">+38 (044) 239-33-38.</span><br/>
                        <span className="outline">kafmetod@ukr.net</span><br/>
                        Головний редактор<br/>
                        Шовковий В. М., д-р пед. наук, проф.<br/>
                        Відповідальний секретар<br/>
                        Сем’ян Наталія, асистент кафедри методики викладання української та іноземних мов і літератур Інституту філології <br/> Київського національного університету імені Тараса Шевченка<br/>
                        <span className="outline">semian.nv@gmail.com</span><br/>
                    </p>
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
            <div className="infor">
                <h2 className="header" id="2">Editorial Board</h2>
                <p>Editor-in-Chief:
                    Vyacheslav Shovkovyi, Dr. Sc. in Education, Professor, Head of the Department of
                    Methodology for Teaching Ukrainian and Foreign Languages and Literatures, Institute of
                    Philology, Taras Shevchenko National University of Kyiv, Ukraine</p>
                <h4 className="color-blue">Editional Board:</h4>
                <ul className="border-left-sm">
                    <li>Olesia Liubashenko, Dr. Sc. in Education, Professor, Taras Shevchenko National
                        University of Kyiv, Ukraine</li>
                    <li>Petro Bekh, PhD in Philology, Professor, Taras Shevchenko National University of Kyiv,
                        Ukraine</li>
                    <li>Pavel Danchak, Dr. Sc. in Education, Professor, the University of Presov, the Slovak
                        Republic</li>
                    <li>Larysa Ziaziun, Dr. Sc. in Education, Professor, Taras Shevchenko National University of
                        Kyiv, Ukraine</li>
                    <li>Lilia Morska, Dr. Sc. in Education, Professor, Ternopil Volodymyr Hnatiuk National Pedagogical University, Ukraine</li>
                    <li>Olena Petraschuk, Dr. Sc. in Education, Professor, National Aviation University, Ukraine</li>
                    <li>Roman Sieron, Dr. Sc. in Education, Professor, John Paul II Catholic University of Lublin, the Republic of Poland
                    </li>
                    <li>Tamara Kavytska, PhD in Education, Assistant Professor, Taras Shevchenko National University of Kyiv, Ukraine  </li>
                    <li>Iryna Zadorozhna, Dr. Sc. in Education, Professor, Ternopil Volodymyr Hnatiuk National Pedagogical University, Ukraine</li>
                </ul>
                <div className="info">
                    <h4 className="color-blue">Executive Secretary:</h4>
                    <p>Natalia Semian, Lecturer, Taras Shevchenko National University of Kyiv, Ukraine  </p>
                    <h5 className="h" id="3a">Publication ethics</h5>
                    <p>The following standards are expected in the Ars linguodidacticae (Мистецтво лінгводидактики) journal of the author, the editor and the reviewer.

                        All the articles submitted to Ars linguodidacticae (Мистецтво лінгводидактики) are peer reviewed for authenticity and ethical issues.
                    </p>
                    <h5 className="h">Duties of the author</h5>
                    <p>Authorship of the manuscript: Authorship should be limited to those who have significantly contributed to the conception, execution and interpretation of the report study. Before submitting the manuscript, it is necessary to ensure that all the authors have been listed and have approved the final version of the paper.</p>
                    <p>
                        Originality and plagiarism: Authors should ensure that the work they have submitted is original. If the authors have used the work or words of others, they need to be cited or quoted. Plagiarism is viewed as unethical behaviour and is not acceptable.

                    </p>
                    <p>Data access and retention: Authors should submit raw data for editorial review, should be ready to provide access to these data, and should be prepared to retain these data within a year from the time of publication.

                    </p>
                    <p>
                        Multiple or concurrent publication: Authors should not publish a manuscript presenting the same research in more than one journal. Submitting the same manuscript to more than one journal constitutes unethical publishing behavior and is not acceptable.

                    </p>
                    <p>Ghost writing and guest authorship. The Editors strongly disapprove of ghostwriting, and guest authorship which shall be treated as scientific dishonesty.

                    </p>
                    <p>Ghost writing refers to a situation when a person who has significantly contributed to the manuscript has not been recognized as the author, or his role has not been mentioned in the acknowledgements.

                    </p>
                    <p>Guest authorship relates to a situation when contribution of a person to the manuscript is minimal or has not taken place at all, but despite this he is included as an author/co-author of the work.
                    </p>
                    <h5 className="h">Duties of the editor</h5>
                    <p>Monitoring the ethical standards: The editorial board monitors the ethical standards of scientific publications and takes measures against any malpractices.</p>
                    <p>Partiality: When deciding whether to accept or reject a given manuscript, the quality of the work, its originality, clarity and its relevance to the scope of the journal are crucial. The manuscripts are evaluated on the basis of their scientific merit without regard to race, gender, sexual orientation, religious beliefs, citizenship or political ideology.</p>
                    <p>Confidentiality: The editors must ensure that all materials submitted to the journal remain confidential while under review. They must not disclose any information about the submitted manuscript to anyone other than the authors, reviewers and potential reviewers.</p>
                    <p>Disclosure and conflict of interest: Unpublished materials disclosed in the submitted manuscript must not be used by the editor and the editorial board in their own research without written consent of the author(s). The editorial board does not select as reviewers those who are in personal or professional relations with the author(s).</p>
                    <h5 className="h">Duties of the reviewer</h5>
                    <p>Promptness: Any reviewer who does not feel qualified to review the manuscript or knows that its timely review will be impossible should notify the editors.</p>
                    <p>Confidentiality: All the reviewed manuscripts must be treated as confidential documents. They must not be shown to or discussed with others, except for the editorial board.</p>
                    <p>Objectivity: Reviews should be conducted objectively, by means of scientific arguments, in order to improve the quality of the manuscript. Personal criticism of the authors is considered inappropriate. Reviewers should express their views clearly and support them with appropriate arguments.</p>
                    <p>Disclosure or conflict of interest: Reviewers should not review manuscripts in which they have conflicts of interest resulting from competitive, collaborative or other relations with the author(s). Information obtained through peer review must be kept confidential and not used for personal advantage.</p>
                    <p className="h">Anonymity</p>
                    <p>
                        All reviews are conducted anonymously. The editors do not disclose the information about the reviewers.
                    </p>
                    <span className="margines"></span>
                </div>
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
                <p className="marg">Журнал Ars Linguodidacticae належить до наукометричних баз даних <br/>
                    <a href="http://www.nbuv.gov.ua/" target="_blank"><img className="lib" src="images/nbuv.png" alt="1"/></a> <br/>
                    <a href="http://www.library.univ.kiev.ua/ukr/title4.php3" target="_blank"><img className="libi" src="images/zagolov.png" alt="2"/></a> <br/></p>
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
                <p>Journal Ars Linguodidacticae belongs to science-computer databases <br/>
                <a href="http://www.nbuv.gov.ua/" target="_blank"><img className="lib" src="images/nbuv.png" alt="1"/></a><br/>
                <a href="http://www.library.univ.kiev.ua/ukr/title4.php3" target="_blank"><img className="libi" src="images/zagolov.png" alt="2"/></a> <br/></p>

            </div>
        );
    }
}
class ContactsEng extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="information">
                    <h3 className="h">Editorial Office</h3>
                    <p className="pa">Department of Methodology of Teaching Ukrainian and Foreign Languages and Literatures<br/>
                        in the Institute of Philology, Taras Shevchenko National University of Kyiv <br/>
                        01601, Taras Shevchenko avenue, 14, of. 134.<br/>
                        <span className="outline">+38 (044) 239-33-38</span>.<br/>
                        <span className="outline">kafmetod@ukr.net</span><br/>
                        Editor-in-Chief<br/>
                        Vyacheslav Shovkovyi, Dr. Sc. in Education, Professor, Head of the Department of Methodology for<br/> Teaching Ukrainian and Foreign Languages and Literatures<br/>
                        Executive Secretary:<br/>
                        Natalia Semian, Lecturer, Taras Shevchenko National University of Kyiv<br/>
                        <span className="outline">semian.nv@gmail.com</span><br/>

                    </p>
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
    ReactDOM.render(<ContactsEng />, document.getElementById('contacts'));

}
function ukr() {
    ReactDOM.render(<Header />, document.getElementById('topblock'));
    ReactDOM.render(<Permition />, document.getElementById('permition'));
    ReactDOM.render(<Cover />, document.getElementById('cover'));
    ReactDOM.render(<Policy />, document.getElementById('policy'));
    ReactDOM.render(<EditColegy />, document.getElementById('edit'));
    ReactDOM.render(<Foot />, document.getElementById('footer'));
    ReactDOM.render(<Contacts />, document.getElementById('contacts'));
}
