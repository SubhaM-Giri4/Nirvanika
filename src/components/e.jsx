import { useState } from "react";
import "../styles/examine.css";

const E = () => {
    const [f, sf] = useState({ a: "", b: "", c: "", d: "", e: "", m: "" });
    const [r, sr] = useState({ t: "", q: "" });

    const qt = [
        "Every day is a second chance.",
        "Almost everything will work again if you unplug it for a few minutes, including you.",
        "You don't have to control your thoughts. You just have to stop letting them control you.",
        "Tough times never last, but tough people do."
    ];

    const h = (ev) => {
        sf({ ...f, [ev.target.name]: ev.target.value });
    };

    const s = (ev) => {
        ev.preventDefault();
        let p = 0;

        if (Number(f.a) < 6) p += 2;
        if (Number(f.b) > 7) p += 3;
        if (f.c.length > 50) p -= 1;
        if (Number(f.d) < 4) p += 1;
        if (Number(f.e) < 20) p += 1;
        if (Number(f.m) < 5) p += 2;

        let x = "";

        if (p <= 2) x = "Excellent coping mechanisms. Keep up the good habits.";
        else if (p <= 5) x = "Moderate stress detected. Make sure to take breaks today.";
        else x = "High stress levels. Please consult our resources and prioritize self-care.";

        sr({ t: x, q: qt[Math.floor(Math.random() * qt.length)] });
    };

    return (
        <div className="ec">
            <div className="eh">
                <h2>Self Assessment</h2>
                <div className="eu"></div>
            </div>
            <form onSubmit={s} className="ef">
                <div className="ei">
                    <label>Hours of sleep last night:</label>
                    <input name="a" value={f.a} onChange={h} type="number" required />
                </div>
                <div className="ei">
                    <label>Current stress level (1-10):</label>
                    <input name="b" value={f.b} onChange={h} type="number" min="1" max="10" required />
                </div>
                <div className="ei">
                    <label>Glasses of water today:</label>
                    <input name="d" value={f.d} onChange={h} type="number" min="0" required />
                </div>
                <div className="ei">
                    <label>Minutes of physical activity today:</label>
                    <input name="e" value={f.e} onChange={h} type="number" min="0" required />
                </div>
                <div className="ei">
                    <label>Overall mood rating (1-10):</label>
                    <input name="m" value={f.m} onChange={h} type="number" min="1" max="10" required />
                </div>
                <div className="ei">
                    <label>Briefly describe your primary worry today:</label>
                    <textarea name="c" value={f.c} onChange={h} required />
                </div>
                <button type="submit" className="eb">Analyze</button>
            </form>

            {r.t && (
                <div className="er">
                    <h4>Analysis Result:</h4>
                    <p>{r.t}</p>
                    <blockquote>"{r.q}"</blockquote>
                </div>
            )}
        </div>
    );
};

export default E;