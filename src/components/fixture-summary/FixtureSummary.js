import { withStyles } from '@material-ui/core/styles'

const styles = {
  container: {
    "background": 'rgba( 55, 55, 55, 0.3 )',
    "box-shadow": 'inset 0 8px 32px 0 rgba( 155, 155, 155, 0.37 )',
    "backdrop-filter": 'blur( 10px )',
    "-webkit-backdrop-filter": 'blur( 10px )',
    "border-radius": '25px',
    "border": '1px solid rgba( 55, 55, 55, 0.2 )',
    "display": 'flex',
    "flex-direction": 'column',
    "justify-content": 'center',
    "align-items": 'center',
    "text-align": 'center',
    "width": 'auto',
    "padding": '10px',
    "margin": '10px'
  },
  heading: {
    "color": '#ffffff',
    "margin": '10px'
  },
  fixturesTable: {
    "text-align": 'left'
  },
  dateText: {
    "color": '#ffffff',
    "font-weight": 'bold'
  },
  titleText: {
    "color": '#ffffff'
  },
}

const fixtures = [
    { ref: '001', start: '2021-08-14T12:30:00Z', end: '2021-08-14T20:00:00Z', title: 'Winton CC 1st XI v Brooksbottom CC 1st XI' },
    { ref: '002', start: '2021-08-157T13:30:00Z', end: '2021-08-15T20:00:00Z', title: 'Monton CC 4th XI v Winton CC 3rd XI' },
    { ref: '003', start: '2021-08-21T12:30:00Z', end: '2021-08-21T20:00:00Z', title: 'Westleigh CC 1st XI v Winton CC 1st XI' },
    { ref: '004', start: '2021-08-21T13:00:00Z', end: '2021-08-21T20:00:00Z', title: 'Winton CC 2nd XI v Flixton C&SC 2nd XI' }
]

const getDateText = (start, end) => {
    //TODO implement
    return 'Saturday'
}

//TODO refactor into compact and full designs

const FixtureSummary = (props) => {
  const { classes} = props;

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Upcoming Fixtures</h1>
            <table className={classes.fixturesTable}>
                {
                    fixtures.map(fixture => (
                        <tr>
                            <td className={classes.dateText}>
                                {getDateText(fixture.start, fixture.end)}
                            </td>
                            <td className={classes.titleText}>
                                {fixture.title}
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default withStyles(styles)(FixtureSummary);
