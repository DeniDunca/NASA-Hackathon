import "./Rain.css"

const Rain = () => {
    const numberOfRaindrops = 30; // Adjust the number of raindrops as needed

    const raindrops = Array.from({ length: numberOfRaindrops }, (_, index) => (
        <div
        key={index}
        className="raindrop"
        style={{
            animationDelay: `${Math.random() * 2}s`, // Randomize delay for each raindrop
            left: `${Math.random() * 100}%`, // Randomize horizontal position
            height: `${Math.random() * 20}px`, // Randomize raindrop height
        }}
        ></div>
    ));

    return <div className="rain-container">{raindrops}</div>;
}

export default Rain;