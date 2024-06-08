// Side Bar Component 
import sideBarData from "../../data/sideBarData.json";
import { Fragment } from "react/jsx-runtime";

const SideBar = () => {

    const content = (
        <ul className="menu bg-base-200 w-56 rounded-box">
            {sideBarData.sideBarLinks.map((item, index) => (
                <Fragment key={index}>
                    <li key={item.sectionTitle}>
                        {item.children.length > 0 ? 
                        (
                            <details>
                                <summary>{item.sectionTitle}</summary>
                                <ul>
                                    {item.children.map((childItem) => (
                                        <li key={childItem.childrenTitle}><a>{childItem.childrenTitle}</a></li>
                                    ))}
                                </ul>
                            </details>
                        )
                        :
                        (<a>{item.sectionTitle}</a>)
                    }
                    </li>
                    {(item.sectionTitle == "Price (High - Low)") && (<><br/> <br/></>)}
                </Fragment>
            ))}
        </ul>
    );

    return content;
}

export default SideBar;