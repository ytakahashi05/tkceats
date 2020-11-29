import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useFoodDetailQuery } from "../src/generated/graphql"
import { Typography } from "@material-ui/core";
import { withRouter } from "next/router";

const FoodDetail = withRouter(props => {
    const id = Number(props.router.query.id);
    const { loading, data } = useFoodDetailQuery({ variables: { id } });
    if (loading) { return <Box><Typography>now loading...</Typography></Box> }
    return (
        <Box display="flex" style={{ width: "85%", margin: "auto", height: "100vh" }}>
            <Grid container spacing={2} >
                {/* 写真 */}
                <Grid item xs={3} >
                    <div style={{ height: "100%", width: "100%" }}>
                        <img src={`${data?.foods[0].name}.jpg`} />
                    </div>
                </Grid>
                {/* main */}
                {/* <Grid item container xs={9} spacing={1} style={{ height: "20px" }}>
                    <Grid item xs={12}>
                        <Typography>メニュー</Typography>
                    </Grid>
                    <Grid item container xs={12} spacing={1}>
                        {data?.foods.map((item) => {
                            return <ItemBox url={`${item.name}.jpg`} name={item.name} price={item.price || 0} />
                        }
                        )}
                    </Grid>
                </Grid> */}
            </Grid>
        </Box>
    )
})
export default FoodDetail;