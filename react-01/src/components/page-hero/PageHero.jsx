import "./PageHero.css";

const PageHero = (props) => {
    return (
        <section className="page-hero">
            <div className="container">
                <p className="breadcrumbs">{props.module} / <span>{props.tag}</span></p>
                <h1>{props.title}<br /><span className="highlight-text">{props.highlight}</span></h1>
                <p className="hero-text">{props.text}</p>
            </div>
        </section>
    );
};

export default PageHero;