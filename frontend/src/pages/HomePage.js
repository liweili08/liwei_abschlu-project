import {Link, Outlet} from "react-router-dom";
import {Divider, ThemeProvider, Typography} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import "../styles/HomePage.css"

const theme = createTheme({
    typography: {
        h2: {
            fontSize: 50,
            marginBottom: 30,
            marginTop: 50
        }
    }
})

export default function HomePage({themeList}) {
    return (
        <ThemeProvider theme={theme}>
            <div className="page-header">
                <Typography variant="h2" component="div"> HöMApp </Typography>
                <Divider color="lightgoldenrodyellow"/>
            </div>
            <div className="info-text">Wählen Sie ein Thema: </div>
            <ul className="normal-link">
                {themeList.map((mathTheme) => {
                    return (
                        <li key={mathTheme.id} className="theme-li"><Link to={mathTheme.themeName} className="theme-item"> {mathTheme.themeName} </Link></li>)
                })}
                <Outlet/>
            </ul>
        </ThemeProvider>
    )
}