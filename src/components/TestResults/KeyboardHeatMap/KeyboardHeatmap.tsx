import "./KeyboardHeatmap.css"
import { useState } from "react"

import KeybPopUp from "@/components/TestResults/KeyboardHeatMap/KeybPopUp/KeybPopUp"

export default function KeyboardHeatmap () {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    const topRow = ["q","w","e","r","t","y","u","i","o","p","[", "]"]
    const midRow = ["a","s","d","f","g","h","j","k","l",";", "'"]
    const botRow = ["z","x","c","v","b","n","m",",",".","/"]

    return (
        <>
            <div className="keyboard-wrapper">

                {isHovered && (
                    <div className="keyb-popup-wrapper" key="popup">
                        <KeybPopUp />
                    </div>
                )}

                {/* Can I make this more DRY somehow? */}
                <div className="keyb-top">
                    {
                        topRow.map((eachChar, idx) => {
                            return (
                                <div 
                                    className="keyb-key-top" 
                                    key={idx}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    {eachChar}
                                </div>
                            )
                        })
                    }
                </div>

                <div className="keyb-mid">
                    {
                        midRow.map((eachChar, idx) => {
                            return (
                                <div 
                                    className="keyb-key-mid" 
                                    key={idx}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    {eachChar}
                                </div>
                            )
                        })
                    }
                </div>

                <div className="keyb-bot">
                    {
                        botRow.map((eachChar, idx) => {
                            return (
                                <div 
                                    className="keyb-key-bot" 
                                    key={idx}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    {eachChar}
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </>
    )
}
