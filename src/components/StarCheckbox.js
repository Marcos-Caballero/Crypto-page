import React, { useState } from 'react';
import '../StarCheckbox.css'; // Agrega un archivo CSS para estilos

function StarCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className={`star-checkbox ${isChecked ? 'checked' : ''}`}>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
        />
        <span className="star">&#9733;</span> {/* U+2605 es el carácter estrella */}
        </label>
    );
}

export default StarCheckbox;
