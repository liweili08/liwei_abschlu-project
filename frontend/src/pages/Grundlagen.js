import {Link, Outlet, useParams} from "react-router-dom";


export default function Grundlagen(props) {
    const {themeList} = props;
    const {themeName}=useParams();
    const findTheme= themeList.find((mathTheme)=>{
        return mathTheme.themeName=== themeName;
    })
    if(!findTheme){
        return (<h1 >Thema nicht gefunden...</h1>)
    }
    return (
        <div className="grundlagen">

            <ul className="normal-link">
                {findTheme.basicList.map((mathBasic) => {
                    return (
                        <li key={mathBasic.id}><Link
                            to={mathBasic.name}> {mathBasic.name}</Link>
                        </li>
                    )
                })}

            </ul>
            <Outlet/>
            <br/>
        </div>
    )
}