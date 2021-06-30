import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import * as pkg from "../../package.json";
import {makeStyles} from "@material-ui/styles";

const style = makeStyles({
    footer: {
        "&:hover": {
            textDecoration: "none"
        }
    }
})

function Copyright() {
    const useStyle = style()
  return (
    <div>
      <Box>
        <Typography variant="body2" color="textSecondary" align="center">
            Copyright © 2021 QuantumzzZ All Rights Reserved
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
            <Link color="inherit" href={pkg.repository.url} target="_blank" className={useStyle.footer}>
                quantumzzz@foxmail.com
            </Link>

        </Typography>
      </Box>
    </div>
  );
}

export default Copyright;
