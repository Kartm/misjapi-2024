import React from "react";

const HeroSection: React.FC = () => {
    return <section className="hero bg-blue-500 text-white text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Korepetycje on-line nie muszą być nudne!</h1>
        <p className="text-lg mb-4">Odkryj nowoczesne podejście do edukacji, które sprawia, że nauka jest łatwa i
            przyjemna.</p>
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">Wybierz zajęcia</button>
    </section>
}

export default HeroSection;