import React from "react";
import styles from "./CategoriesIcons.module.scss";

const CategoriesIcons: React.FC = () => {

    return (
        <div className={styles.container}> 
            <h1>Select a category to browse</h1>
            <div className={styles.categories}>

            <div className={styles.category}>
                <img src='t-shirt.png' alt="t-shirt" />
                T-shirts 
            </div>

            <div className={styles.category}>
                <img src='jeans.png' alt="t-shirt" />
                Jeans 
            </div>

            <div className={styles.category}>
                <img src='hoodie.png' alt="t-shirt" />
                Hoodies
            </div>

            <div className={styles.category}>
                <img src='shirt.png' alt="t-shirt" />
                Shirts 
            </div>

            <div className={styles.category}>
                <img src='sneakers.png' alt="t-shirt" />
                Sneakers 
            </div>

            <div className={styles.category}>
                <img src='high-heel.png' alt="t-shirt" />
                Womens shoes
            </div>

            <div className={styles.category}>
                <img src='bluse.png' alt="t-shirt" />
                Blouses
            </div>

            <div className={styles.category}>
                <img src='skirt.png' alt="t-shirt" />
                Skirts 
            </div>

            <div className={styles.category}>
                <img src='dress.png' alt="t-shirt" />
                Dresses
            </div>

            <div className={styles.category}>
                <img src='sportswear.png' alt="t-shirt" />
                Sportswear 
            </div>



            </div>
        </div>

    )

}

export default CategoriesIcons;