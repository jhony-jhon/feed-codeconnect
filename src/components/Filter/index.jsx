import './styles.css';

export default function Filter() {
    return (
        <section className='container-filtro'>
            <ul>
                <li>Programação</li>
                <li>React</li>
                <li>Acessibilidade</li>
            </ul>

            <button>Limpar tudo</button>
        </section>
    )
}