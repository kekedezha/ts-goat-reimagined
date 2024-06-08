const SideBar = () => {

    const content = (
        <ul className="menu bg-base-200 w-56 rounded-box">
            <li><a>Popular</a></li>
            <li><a>Recently Released Sneakers</a></li>
            <li><a>New In Apparel</a></li>
            <li><a>Price (Low - High)</a></li>
            <li><a>Price (High - Low)</a></li>
            <br/>
            <br/>
            <li>
                <details>
                    <summary>Brand</summary>
                    <ul>
                        <li><a>Air Jordan</a></li>
                        <li><a>Cactus Jack By Travis Scott</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>Category</summary>
                    <ul>
                        <li><a>Sneakers</a></li>
                        <li><a>Apparel</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>Gender</summary>
                    <ul>
                        <li><a>Men</a></li>
                        <li><a>Women</a></li>
                        <li><a>Youth</a></li>
                        <li><a>Infant</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>Size</summary>
                    <ul>
                        <li><a>Sneakers</a></li>
                        <li><a>Tops</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>Condition</summary>
                    <ul>
                        <li><a>New</a></li>
                        <li><a>Used</a></li>
                        <li><a>New With Defects</a></li>
                        <li><a>Infant</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>Color</summary>
                    <ul>
                        <li><a>Red</a></li>
                        <li><a>Green</a></li>
                        <li><a>Blue</a></li>
                        <li><a>Black</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>Price</summary>
                    <ul>
                        <li><a>Horizontal Scroll</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <summary>Instant</summary>
            </li>
            <li>
                <summary>Under Retail</summary>
            </li>
            <li>
                <summary>Available Now</summary>
            </li>
            <li>
                <details>
                    <summary>Year</summary>
                    <ul>
                        <li>2010</li>
                        <li>2011</li>
                        <li>2012</li>
                        <li>2013</li>
                        <li>2014</li>
                        <li>2015</li>
                        <li>2016</li>
                        <li>2017</li>
                        <li>2018</li>
                        <li>2019</li>
                        <li>2020</li>
                        <li>2021</li>
                        <li>2022</li>
                        <li>2023</li>
                        <li>2024</li>
                    </ul>
                </details>
            </li>
        </ul>
    );

    return content;
}

export default SideBar;