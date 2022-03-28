import React from 'react';
import Link from '../../Link/Link';
import { MenuIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const route =[
        {id:1,name:'Home',link:'/home'},
        {id:1,name:'Shop',link:'/shop'},
        {id:1,name:'Contact',link:'/contact'},
        {id:1,name:'About',link:'/about'},
    ]
    return (
        <div>
            <nav>
                <div>
                    <MenuIcon></MenuIcon>
                </div>
                <ul classNmae="md:flex">
                    
                    {
                        route.map(route=><Link 
                            key={route.id}
                            route={route}
                            ></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;