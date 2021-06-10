import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyle';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import AddRoundedIcon from '@material-ui/icons/AddRounded';


const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = (props) => {
    const classes = useStyles();
    const { stock, initial } = props;
    const [count, setCount] = useState(initial);
    const [buttonToggle, setButtonToggle] = useState(false);

    const agregandoItem = (e) => {
        if (count > 0 && count <= stock) {
            console.log(`${count} productos seleccionados`)
        }
    }

    const eliminoItem = () => {
        if (count !== 0) {
            setCount(count - 1)
            if (count === 1) {
                setButtonToggle(true)
            }
        }
    }

    const agregoItem = () => {
        if (count !== stock) {
            setCount(count + 1)
            setButtonToggle(false)
        }
    }

    return <section>
        <div className={classes.contenedorItem}>
            <div className={classes.cantidadDiv}>
                <label>Cantidad:</label>
                <div className={classes.inputGroup}>
                    <div className={classes.inputGroupPrepend}>
                        <button onClick={e => eliminoItem()}>
                            <RemoveRoundedIcon fontSize='2rem' />
                        </button>

                    </div>
                    <span>{count}</span>
                    <div className={classes.inputGroupAppend}>
                        <button onClick={e => agregoItem()}>
                            <AddRoundedIcon fontSize='2rem' />
                        </button>
                    </div>
                </div>
            </div>
            <button disabled={buttonToggle} onClick={e => count === 0 ? undefined : agregandoItem()}>
                <AddShoppingCartTwoToneIcon />
                Agregar al carrito
                </button>
            {count === 10 && <h5>Stock máximo</h5>}
        </div>
    </section>

}