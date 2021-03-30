/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Menubar } from 'primereact/menubar';

const Navbar = ({onSetVisible}) => {

    const items = [
        {
            label: 'Ana sayfa',
            icon: 'pi pi-home'
        },
        {
            label: '',
            template: (item, options) => {
                return (
                    <a onClick={onSetVisible}>
                        <span className={'pi pi-arrow-right'}></span>
                    </a>
                );
            }
        }
    ]



    const start = <img alt="logo" src="../header-logo-min.svg"  height="40" className="p-mr-2"></img>;
    const end = <div>sad</div>;

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    )
}

export default Navbar;