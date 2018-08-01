import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

  renderWeather(data) {
    return (
      <tr key={data.city.id}>
        <td>{data.city.name}</td>
      </tr>
    );
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>City</td>
            <td>Temperature</td>
            <td>Pressure</td>
            <td>Humidity</td>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
