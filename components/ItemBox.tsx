import { Grid, ButtonBase, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, makeStyles, Link } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%"
    },
    media: {
        height: 200,
    },
});

export const ItemBox: React.FC<{ url: string; name: string, price: number, id: number }> = ({ url, name, price, id }) => {
    const classes = useStyles();
    return (
        <Grid item container xs={6} md={4} spacing={2}>
            <Grid container item>
                <Card className={classes.root}>
                    <Link href={`/foodDetail?id=${id}`}>
                        <CardActionArea>
                            <CardMedia
                                image={url}
                                className={classes.media}
                            />
                            <CardContent >
                                <Box justifyContent="space-between">
                                    <p >
                                        {name}
                                    </p>
                                    <p >
                                        {price}$
                                </p>
                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </Grid>
        </Grid >
    )
}