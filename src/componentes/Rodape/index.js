import './Rodape.css'

const Rodape = () => {

    return (<footer className="footer">
    <section>
        <ul>
            <li>
                <a href="http://facebook.com/sauloealves" target="_blank">
                    <img src="/imagens/fb.png" alt="" />
                </a>
            </li>
            <li>
                <a href="http://twitter.com/sauloealves" target="_blank">
                    <img src="/imagens/tw.png" alt="" />
                </a>
            </li>
            <li>
                <a href="http://instagram.com/sauloealves" target="_blank">
                    <img src="/imagens/ig.png" alt="" />
                </a>
            </li>
        </ul>
    </section>
    <section>
        <img src="/imagens/logo.png" alt="" />
    </section>
    <section>
        <p>
            Desenvolvido por Alura.
        </p>
    </section>
</footer>)

}

export default Rodape