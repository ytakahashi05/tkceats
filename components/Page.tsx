import Box from "@material-ui/core/Box";

const Page: React.FC<{}> = ({ children }) => {
    return (
        <Box m="2rem">{children}</Box>
    )
}

export default Page;