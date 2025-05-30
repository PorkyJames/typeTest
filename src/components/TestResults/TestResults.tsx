import "../TestResults/TestResults.css"

import { useHomeContext } from "@/lib/useHomeContext"

export default function TestResults() {

    const {setTestComplete, charsTyped, setCharsTyped, correctCount} = useHomeContext()

    const setFalse = () => {
        setTestComplete(false)
        setCharsTyped(0)
    }
    
    const calculateWPM = (charsTyped : number): number => {
        return (charsTyped / 5) / .25
    }

    const calculateAcc = (correctCount : number): number => {
        return ((correctCount / charsTyped) * 100)
    }
    

    return (
        <>

            <div className="tr-top-wrapper">
                <div className="wpm-result">
                    WPM: {calculateWPM(charsTyped)}
                </div>

                <div className="acc-result">
                    Acc: {calculateAcc(correctCount).toFixed(1)}
                </div>
            </div>

            {/* Add a keyboard that shows the amount of errors on each keystroke */}
            {/* Need to make it DRY */}
            <div className="keyboard-wrapper">
                <div className="keyb-top">
                    <div className="keyb-key-top">q</div>
                    <div className="keyb-key-top">w</div>
                    <div className="keyb-key-top">e</div>
                    <div className="keyb-key-top">r</div>
                    <div className="keyb-key-top">t</div>
                    <div className="keyb-key-top">y</div>
                    <div className="keyb-key-top">u</div>
                    <div className="keyb-key-top">i</div>
                    <div className="keyb-key-top">o</div>
                    <div className="keyb-key-top">p</div>
                    <div className="keyb-key-top">[</div>
                    <div className="keyb-key-top">]</div>
                </div>

                <div className="keyb-mid">
                    <div className="keyb-key-mid">a</div>
                    <div className="keyb-key-mid">s</div>
                    <div className="keyb-key-mid">d</div>
                    <div className="keyb-key-mid">f</div>
                    <div className="keyb-key-mid">g</div>
                    <div className="keyb-key-mid">h</div>
                    <div className="keyb-key-mid">j</div>
                    <div className="keyb-key-mid">k</div>
                    <div className="keyb-key-mid">l</div>
                    <div className="keyb-key-mid">;</div>
                    <div className="keyb-key-mid">'</div>
                </div>

                <div className="keyb-bot">
                    <div className="keyb-key-bot">z</div>
                    <div className="keyb-key-bot">x</div>
                    <div className="keyb-key-bot">c</div>
                    <div className="keyb-key-bot">v</div>
                    <div className="keyb-key-bot">b</div>
                    <div className="keyb-key-bot">n</div>
                    <div className="keyb-key-bot">m</div>
                    <div className="keyb-key-bot">,</div>
                    <div className="keyb-key-bot">.</div>
                    <div className="keyb-key-bot">/</div>
                </div>

            </div>

            <div className="restart-btn">
                <button onClick={setFalse}>Press to Restart Test</button>
            </div>
        </>
    )
}
