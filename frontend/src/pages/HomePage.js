import {Link, Outlet} from "react-router-dom";


export default function HomePage(props) {
    const {themeList} = props;
    return (
        <div>
            <div className="page-header">
                <h1>HöMApp</h1>
                <hr/>
            </div>
            <h2> Wählen Sie ein Thema: </h2>
            <ul className="normal-link">
                {themeList.map((mathTheme) => {
                    return (
                        <li key={mathTheme.id}><Link to={mathTheme.themeName}> {mathTheme.themeName} </Link></li>)
                })}
                <Outlet/>
            </ul>

        </div>
    )
}