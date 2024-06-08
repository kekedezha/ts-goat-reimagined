//Nav Bar Component
import navBarData from "../../data/navData.json"
import { Fragment } from "react/jsx-runtime";

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
                {navBarData.navLinks.map((item,index) => (
                    <Fragment key={index}>
                        {item.navTitle === "Home" || item.navTitle === "Editorial" ?
                            (<button key={item.navTitle} className="btn btn-ghost">{item.navTitle}</button>)
                        :
                            (
                                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost m-1">{item.navTitle}</div>
                                    <ul tabIndex={0} className="menu menu-horizontal menu-xs dropdown-content bg-base-200 rounded-box lg:min-w-max">
                                            {item.children.map((childItem, index) => (
                                                <li key={index}>
                                                    <h2 className="menu-title">{childItem.subCategoryTitle}</h2>
                                                    <ul>
                                                        {childItem.subCategories.map(subItems => (
                                                            <li key={subItems}>
                                                                <a>{subItems}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )
                            }
                    </Fragment>
                ))}
            </div>
            <div className="nav__account">
                <button className="btn btn-ghost">Account  👤</button>
            </div>
        </nav>
    )
    return content;
}

export default Nav;