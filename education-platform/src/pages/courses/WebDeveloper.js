import Header from "../../components/courses/Header"
import '../../styles/courses/style.css'
import account from '../../images/courses/account.png'


export default function WebDeveloper() {
    const modules = ['HTML', 'CSS', 'JavaScript', 'TypeScript']
    return (
        <div>
            <Header />
            <h1>Веб-разработка</h1>
            <div id="description">
                <p>Вы изучите HTML, CSS, языки программирования JavaScript, TypeScript, библиотеку React.
                    На курсе будут сеансы парного программирования, лайвкодинг и хакатон.</p>
            </div>
            <div id="teacher">
                <div>
                    <img src={account} />
                </div>
                <p>Курс читает: <b>Преподаватель</b></p>
            </div>
            <div id="modules-menu">
                <div id="modules">
                <h2>Модули</h2>
                    {modules.map(el => (
                        <a href='' key={el}>{el}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}