import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useFoodListLazyQuery, Foods } from "../src/generated/graphql"
import { Typography } from "@material-ui/core";
import { ItemBox } from "../components/ItemBox";
import { SideMenu } from "../components/SideMenu";
import { useState, useEffect } from "react";


const FoodsList: React.FC = () => {
    const [foods, setFoods] = useState<Foods[] | undefined>();
    const [getFoods, { loading }] = useFoodListLazyQuery({
        onCompleted: (d) => setFoods(d?.foods)
    });
    useEffect(() => getFoods(), [])
    if (loading) { return <Box><Typography>now loading...</Typography></Box> }
    return (
        <Box display="flex" style={{ width: "85%", margin: "auto", height: "100vh" }}>
            <Grid container spacing={2} >
                {/* サイドバー */}
                <Grid item xs={3} >
                    <SideMenu getFoods={getFoods} />
                </Grid>
                {/* main */}
                <Grid item container xs={9} spacing={1} style={{ height: "20px" }}>
                    <Grid item xs={12}>
                        <Typography>メニュー</Typography>
                    </Grid>
                    <Grid item container xs={12} spacing={1}>
                        {foods?.map((item) => {
                            return <ItemBox url={`${item.name}.jpg`} name={item.name} price={item.price || 0} id={item.id} />
                        }
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
export default FoodsList;