/* Tarjetas */

import React from "react";
import styles from ".//Card.module.scss";



const Card = ({results}) => {
    let display;
    console.log(results);

    if(results){
        display = results.map(x=>{
            let{id , name , image,location , status} = x
            return(
            <div key={id} className="col-4 mb-4  position-relative">
                <div className={styles.card}>
                    <img className={`${styles.img} img-fluid`} src={image} alt="" />

                    <div style={{padding: "10px"}} className={`${styles.content}`}>
                    <div className="fs-5 fw-bold mb-4">{name}</div>
                        <div className="">
                            <div className="fs-6 fw-normal">Ultima Ubicación</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                </div>
                {(()=> {
                    if(status === "Dead"){
                        return(
                <div className={`${styles.badge}position-absolute badge bg-danger`}>
                    {status}
                </div>
                        );
                    } else if(status === "Alive"){
                        return(
                            <div className={`${styles.badge}position-absolute badge bg-success`}>
                                {status}
                            </div>
                                    );
                    }else{
                        return(
                            <div className={`${styles.badge}position-absolute badge bg-secondary`}>
                                {status}
                            </div>
                                    );
                    }
                })()}
            </div>
            );
        });
    }else{
        display = "No se encuentra el caracter";
    }
    return <>{display}</>;
};

export default Card;