import React from "react";
import styles from './Carousel.module.css'

const Carousel: React.FC = () => {

    const nextImage = () => {
        console.log('click')
    }

    return (
    <div onClick={nextImage} className={styles.container}>
    
    </div>
    )
}

export default Carousel