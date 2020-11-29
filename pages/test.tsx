import Grid from "@material-ui/core/Grid";
import Page from "../components/Page";
import Header from "../components/Header";
import Box from "@material-ui/core/Box";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
    gql,
    useQuery
} from '@apollo/client'

const client = new ApolloClient({
    link: createHttpLink({
        uri: 'http://localhost:8080/v1/graphql',
    }),
    cache: new InMemoryCache(),
});

const query = gql`
query food {
    foods {
      id,
      name,
      price
    }
  }
`;

import { Drawer, ListItem, ListItemText, ListItemIcon, Typography, Divider, ButtonBase } from "@material-ui/core";
type Menu = {
    name: string,
    price: number
}
const myMenu: Menu[] = [
    { name: "humberger", price: 10 },
    { name: "pizza", price: 200 },
    { name: "niku", price: 1111 },
];

const ItemBox: React.FC<{ url: string; name: string, price: number }> = ({ url, name, price }) => {
    return (
        <Grid item container xs={6} md={4} spacing={2}>
            <Grid container item>
                <ButtonBase>
                    <img src={url} style={{ height: "80%", width: "100%" }} />
                </ButtonBase>
                <Grid item container>
                    <Grid item xs={6}>
                        <Typography>{name}</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ paddingRight: 5 }}>
                        <Typography align="right">{`${price}$`}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}
const testPage = () => {
    return (
        <ApolloProvider client={client}>
            <Page>
                <Header />
                <Main />
            </Page>
        </ApolloProvider>)
};

const Main: React.FC = () => {
    const { loading, data } = useQuery(query);
    if (loading) { return <Box><Typography>now loading...</Typography></Box> }
    return (
        <Box display="flex" style={{ width: "85%", margin: "auto", height: "100vh" }}>
            <Grid container spacing={2} >
                {/* サイドバー */}
                <Grid item xs={3} >
                    <div style={{ display: "block", backgroundColor: "black", height: "100%" }}>
                        <Typography style={{ color: "white" }}>ここにサイドバーをおくじゃろ</Typography>
                    </div>
                </Grid>
                {/* main */}
                <Grid item container xs={9} spacing={1}>
                    <Grid item xs={12} style={{ height: "20px" }}>
                        <Typography>メニュー</Typography>
                    </Grid>
                    <Grid item container xs={12} spacing={1}>
                        {data.foods && data.foods.map((item: any) => {
                            return <ItemBox url={`${item.name}.jpg`} name={item.name} price={item.price} />
                        }
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
export default testPage;
