import { Typography, makeStyles, createStyles, Theme, Paper, MenuList, MenuItem, Divider, Box } from "@material-ui/core";
import { useFoodCategoryQuery } from "../src/generated/graphql";

const useStyles = makeStyles((theme: Theme) => createStyles({
    menuContainer: {
        backgroundColor: theme.palette.secondary.main,
        height: "100%",
        padding: "15px"
    },
    menuTytle: {
        fontColor: "black",
        fontWeight: "bold",
        fontSize: "16px"
    }
})
);

const ListItem: React.FC<{ categoryName: string; categoryId: number; getFoods: any }> = ({ categoryName, categoryId, getFoods }) => {
    return (
        <>
            <MenuItem onClick={() => getFoods({ variables: { categoryId } })} >{categoryName}</MenuItem>
            <Divider />
        </>
    )
}

export const SideMenu: React.FC<{ getFoods: () => void }> = ({ getFoods }) => {
    const classes = useStyles();
    const { loading, data } = useFoodCategoryQuery();
    //if (loading) { return <Box><Typography>now loading...</Typography></Box> }
    return (
        <div className={classes.menuContainer}>
            <Typography className={classes.menuTytle}>カテゴリー</Typography>
            <MenuList>
                {data?.category.map((item) => (<ListItem categoryName={item.name} categoryId={item.id} getFoods={getFoods} />))}
            </MenuList>
        </div>
    );
};