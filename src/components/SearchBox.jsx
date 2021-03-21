import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const SearchBox = ({ handleSubmit }) => {
    const [currency, setCurrency] = useState(null)
    const handleCurrency = (event) => {
        setCurrency(event.target.value);
    }
    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
        >
            <Grid item>
                <TextField id="movie-id-text" label="Currency Code" variant="outlined" autoFocus margin="dense" onChange={handleCurrency} required />
            </Grid>
            <Grid item>
                <Button color="primary" variant="contained" onClick={() => handleSubmit(currency)} startIcon={<MonetizationOnIcon />}>{`Convert`}</Button>
            </Grid>
        </Grid>
    )
};

export default SearchBox;
