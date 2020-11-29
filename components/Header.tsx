import { AppBar, Toolbar, Typography, createStyles, makeStyles, Theme, IconButton, Avatar, Drawer, List, ListItem, ListItemText } from "@material-ui/core"

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        headerLogo: {
            color: "inherit",
            marginRight: 20
        },
        headerTitleStyle: {
            flexGrow: 1,
            color: "white",
            fontSize: "30px",
            fontStyle: "bold"
        },
        avatar: {
            margin: "8px"
        },
        menuButton: {
            color: "inherit",
            padding: "8px"
        },
        header: {
            marginBottom: "10px"
        },
        drawerList: {
            width: 200,
            height: "100%"
        }
    }));
const Header: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.header} color="primary" position="static" aria-label="Global Navi">
                <Toolbar>
                    <Typography variant="subtitle1" className={classes.headerTitleStyle}>Sample Eats</Typography>
                    <IconButton className={classes.menuButton} aria-label="Menu">
                        <Avatar className={classes.avatar}></Avatar>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;