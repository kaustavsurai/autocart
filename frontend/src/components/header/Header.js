import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Hublogo from '../../assets/logo1.png';
import Hublogo2 from '../../assets/logo2.png';

export default class Header extends Component {
  
  render() {
      return (
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <div className="logohome logo1">
                <img src={Hublogo} alt="Hublogo"/>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="logohome">
                <img src={Hublogo2} alt="Hublogo"/>
              </div>
            </Grid>
          </Grid>
      );
  }
}
