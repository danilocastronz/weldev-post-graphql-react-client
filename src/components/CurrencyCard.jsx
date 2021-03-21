import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import numeral from 'numeral';

const useStyles = makeStyles({
    root: {
        width: '250px',
        maxHeight: '100px',
    },
});

const CurrencyCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.currency}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.name || '(Not defined)'}
                </Typography>
                <Typography variant="body2" component="p">
                    {`$1 ${props.base} = ${numeral(props.rate).format('$0,0.00')} ${props.currency}`}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CurrencyCard;
