import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Products from '../Products/Products';

const Inventory = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
            {user &&
                user.email === 'saifur.tamim@gmail.com' ? <>
                <h1 className="heading">Inventory</h1>
                <Products />
            </>
                : <h1 style={{ textAlign: 'center' }}>Authorised Persons Only</h1>
            }
        </div>
    );
};

export default Inventory;