const Nav = () => {

    const content = (
        <nav className="nav">
            <div className="nav__search">
                <label className="input input-ghost flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            <div className="nav__header-links">
                {/* Home Button Link */}
                <button className="btn btn-ghost">Home</button>
                {/* Shop Button Link */}
                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost m-1">Shop 406,348 Items</div>
                    <ul tabIndex={0} className="dropdown-content menu p-2 md:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
                        <li>
                            Featured Brands
                            <ul>
                                <li><a>Air Jordan</a></li>
                                <li><a>Nike</a></li>
                                <li><a>adidas</a></li>
                                <li><a>Supreme</a></li>
                                <li><a>Fear of God Essentials</a></li>
                                <li><a>New Balance</a></li>
                                <li><a>Gucci</a></li>
                                <li><a>Saint Laurent</a></li>
                                <li><a>Commes de Garcon PLAY</a></li>
                            </ul>
                        </li>
                        <li>
                            Collections
                            <ul>
                                <li><a>Just Dropped</a></li>
                                <li><a>New In</a></li>
                                <li><a>Most Wanted</a></li>
                                <li><a>GOAT Selects</a></li>
                                <li><a>Iconic Archival</a></li>
                                <li><a>Women's Sneakers</a></li>
                                <li><a>Grade School Sneakers</a></li>
                                <li><a>Instants</a></li>
                                <li><a>Summer Sale</a></li>
                            </ul>
                        </li>
                        <li>
                            Categories
                            <ul>
                                <li><a>Sneakers</a></li>
                                <li><a>Apparel</a></li>
                                <li><a>T-shirts</a></li>
                                <li><a>Hoodies</a></li>
                                <li><a>Outerwear</a></li>
                                <li><a>Bottoms</a></li>
                                <li><a>Bags</a></li>
                                <li><a>Jewelry</a></li>
                                <li><a>Gift Cards</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* Editorial Button Link */}
                <button className="btn btn-ghost">Editorial</button>
                {/* Timeline Button Link */}
                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost m-1">Timeline</div>
                    <ul tabIndex={0} className="dropdown-content menu p-2 md:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
                        <li>
                            Upcoming Releases
                            <ul>
                                <li><a>Kobe 4 'Girl Dad'</a></li>
                                <li><a>Jordan 6 'Reverse Oreo'</a></li>
                                <li><a>Jordan 4 'Qual 54'</a></li>
                                <li><a>Air Force 1 'Linen' 2024</a></li>
                                <li><a>Air DT Max '96 'Black White' 2024</a></li>
                                <li><a>Jordan 11 Low 'Legend Pink'</a></li>
                                <li><a>'Philly' Dunks</a></li>
                                <li><a>HUF x Air Max 1 'Pear'</a></li>
                                <li><a>Jordan 13 'Dune Red'</a></li>
                            </ul>
                        </li>
                        <li>
                            New Releases
                            <ul>
                                <li><a>Di'orr Greenwood Dunks</a></li>
                                <li><a>Nike Vomero 'Racer Blue' 2024</a></li>
                                <li><a>Jordan 17 Low 'Lightning' 2024</a></li>
                                <li><a>Jordan 1 'Latte'</a></li>
                                <li><a>Travis Scott x Jordan 1 'Canary'</a></li>
                                <li><a>Jordan 12 'Taxi Flip'</a></li>
                                <li><a>Air Max 180 'Ultramarine' 2024</a></li>
                                <li><a>J.Balvin x Jordan 3 'Rio'</a></li>
                                <li><a>KD 4 'Weatherman' 2024</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav__account">
                <button className="btn btn-ghost">Account  👤</button>
            </div>
        </nav>
    )
    return content;
}

export default Nav;